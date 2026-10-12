const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
const year=document.querySelector('#current-year');
if(year)year.textContent=new Date().getFullYear();
function setHeader(){header?.classList.toggle('is-scrolled',window.scrollY>32||document.body.classList.contains('subpage-body'))}
setHeader();window.addEventListener('scroll',setHeader,{passive:true});
function closeMenu(){if(!menu||!nav)return;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');nav.classList.remove('is-open')}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'Open menu':'Close menu');nav.classList.toggle('is-open',!open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));

const form=document.querySelector('#intake-form');
if(form){
  const params=new URLSearchParams(location.search);
  const service=form.elements.namedItem('service');
  const providerSelect=form.elements.namedItem('provider');
  const setKnown=(select,value)=>{if(value&&[...select.options].some(o=>o.value===value))select.value=value};
  setKnown(service,params.get('service'));setKnown(providerSelect,params.get('provider'));
  const date=form.elements.namedItem('date');
  const today=new Date();today.setHours(12,0,0,0);
  date.min=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
  const card=document.querySelector('#result-card');
  const summary=document.querySelector('#request-summary');
  const labels={petName:'Pet',species:'Species',breed:'Breed or mix',size:'Approximate size',coat:'Coat condition',service:'Requested service',provider:'Provider preference',date:'Preferred date',time:'Time preference',handling:'Handling notes',ownerName:'Owner',email:'Email',phone:'Phone'};
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);summary.replaceChildren();
    Object.entries(labels).forEach(([key,label])=>{const row=document.createElement('div');const dt=document.createElement('dt');const dd=document.createElement('dd');dt.textContent=label;dd.textContent=String(data.get(key)||'None provided');row.append(dt,dd);summary.append(row)});
    const docRow=document.createElement('div');const docTerm=document.createElement('dt');const docValue=document.createElement('dd');docTerm.textContent='Documents';docValue.textContent='Not accepted in demo';docRow.append(docTerm,docValue);summary.append(docRow);
    form.hidden=true;card.hidden=false;card.focus();
  });
  document.querySelector('#edit-request')?.addEventListener('click',()=>{card.hidden=true;form.hidden=false;form.elements.namedItem('petName').focus()});
  const config=window.PET_GROOMING_BOOKING||{};
  try{
    const url=new URL(config.url);
    const approved=config.providerName&&url.protocol==='https:'&&config.policiesApproved===true&&config.providerSupportsPetIntake===true&&config.endToEndTested===true;
    if(approved){const providerCard=document.querySelector('#provider-card');const providerLink=document.querySelector('#provider-link');document.querySelector('#provider-label').textContent='Live booking is configured through '+config.providerName+'.';providerLink.href=url.href;providerCard.hidden=false;form.hidden=true}
  }catch{/* Invalid or blank configuration preserves safe demo mode. */}
}
