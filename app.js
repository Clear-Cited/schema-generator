(function(){
  var current='org';
  var tabs=document.querySelectorAll('.tabs button');
  function show(tab){
    current=tab;
    tabs.forEach(function(b){b.setAttribute('aria-selected', b.getAttribute('data-tab')===tab?'true':'false');});
    ['org','product','faq'].forEach(function(t){
      document.getElementById('panel-'+t).classList.toggle('on', t===tab);
    });
  }
  tabs.forEach(function(b){b.addEventListener('click',function(){show(b.getAttribute('data-tab'));});});

  var faqEl=document.getElementById('faqrows');
  function faqRow(q,a){
    var d=document.createElement('div');
    d.className='faqrow';
    d.innerHTML='<input class="f-q" type="text" placeholder="Does it support Kubernetes?" aria-label="Question">'+
      '<input class="f-a" type="text" placeholder="Yes — deploy to any K8s cluster with one command." aria-label="Answer">'+
      '<button class="rm" type="button" aria-label="Remove this question">&times;</button>';
    if(q)d.querySelector('.f-q').value=q;
    if(a)d.querySelector('.f-a').value=a;
    d.querySelector('.rm').addEventListener('click',function(){d.remove();});
    faqEl.appendChild(d);
  }
  faqRow('','');faqRow('','');
  document.getElementById('addfaq').addEventListener('click',function(){faqRow('','');});

  function val(id){return document.getElementById(id).value.trim();}
  function nlList(id){return val(id).split(/\r?\n/).map(function(s){return s.trim();}).filter(Boolean);}

  function buildOrg(){
    var o={"@context":"https://schema.org","@type":"Organization"};
    if(val('o-name'))o.name=val('o-name');
    if(val('o-url'))o.url=val('o-url');
    if(val('o-logo'))o.logo=val('o-logo');
    if(val('o-desc'))o.description=val('o-desc');
    var same=nlList('o-same');
    if(same.length)o.sameAs=same;
    return o;
  }
  function buildProduct(){
    var o={"@context":"https://schema.org","@type":"SoftwareApplication"};
    if(val('p-name'))o.name=val('p-name');
    if(val('p-cat'))o.applicationCategory=val('p-cat');
    if(val('p-os'))o.operatingSystem=val('p-os');
    if(val('p-desc'))o.description=val('p-desc');
    if(val('p-price')){
      o.offers={"@type":"Offer","price":val('p-price'),"priceCurrency":val('p-cur')||"USD"};
    }
    return o;
  }
  function buildFaq(){
    var rows=faqEl.querySelectorAll('.faqrow');
    var items=[];
    Array.prototype.forEach.call(rows,function(r){
      var q=r.querySelector('.f-q').value.trim();
      var a=r.querySelector('.f-a').value.trim();
      if(q&&a)items.push({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}});
    });
    return {"@context":"https://schema.org","@type":"FAQPage","mainEntity":items};
  }
  function currentObj(){
    if(current==='org')return buildOrg();
    if(current==='product')return buildProduct();
    return buildFaq();
  }
  function validate(obj){
    // Light validation: presence of @context/@type + type-specific basics.
    var warn=[];
    if(!obj['@context'])warn.push('missing @context');
    if(!obj['@type'])warn.push('missing @type');
    if(current==='org'&&!obj.name)warn.push('Organization should have a name');
    if(current==='product'&&!obj.name)warn.push('Product should have a name');
    if(current==='faq'&&(!obj.mainEntity||!obj.mainEntity.length))warn.push('add at least one Q&A');
    return warn;
  }
  document.getElementById('gen').addEventListener('click',function(){
    var obj=currentObj();
    var txt=JSON.stringify(obj,null,2);
    document.getElementById('result').textContent=txt;
    var warn=validate(obj);
    var st=document.getElementById('status');
    if(warn.length){st.textContent='— check: '+warn.join(', ');st.style.color='var(--warn)';}
    else{st.textContent='— valid';st.style.color='var(--ok)';}
    document.getElementById('out').style.display='block';
    document.getElementById('out').scrollIntoView({behavior:'smooth'});
  });
  function flash(){var c=document.getElementById('copied');c.style.display='block';setTimeout(function(){c.style.display='none';},2000);}
  function copyText(t){
    if(navigator.clipboard){navigator.clipboard.writeText(t).then(flash,function(){fallbackCopy(t);});}
    else fallbackCopy(t);
  }
  function fallbackCopy(t){
    var ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');flash();}catch(e){}
    ta.remove();
  }
  document.getElementById('copy').addEventListener('click',function(){copyText(document.getElementById('result').textContent);});
  document.getElementById('copytag').addEventListener('click',function(){
    var t=document.getElementById('result').textContent;
    copyText('<script type="application/ld+json">\n'+t+'\n<\/script>');
  });
  document.getElementById('download').addEventListener('click',function(){
    var t=document.getElementById('result').textContent||JSON.stringify(currentObj(),null,2);
    var blob=new Blob([t],{type:'application/ld+json;charset=utf-8'});
    var a=document.createElement('a');a.href=URL.createObjectURL(blob);
    a.download=current+'.jsonld';document.body.appendChild(a);a.click();
    setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},100);
  });
})();
