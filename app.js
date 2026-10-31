let apps = JSON.parse(localStorage.getItem('placementApps')) || [];

function addApplication() {
  const company = document.getElementById('company').value;
  const status = document.getElementById('status').value;
  if(!company) return alert("Company naam likh");
  
  apps.push({ company, status, date: new Date().toLocaleDateString() });
  localStorage.setItem('placementApps', JSON.stringify(apps));
  document.getElementById('company').value = "";
  render();
}

function render() {
  const list = document.getElementById('list');
  list.innerHTML = "";
  apps.forEach((a, i) => {
    list.innerHTML += `<li><span>${a.company} - ${a.date}</span> <b>${a.status}</b> <span onclick="del(${i})" style="cursor:pointer;color:red">X</span></li>`;
  });
  document.getElementById('appCount').innerText = apps.length;
  document.getElementById('dsaCount').innerText = 42 + apps.length; // demo
  document.getElementById('interviewCount').innerText = apps.filter(a=>a.status=='Interview').length;
}

function del(i) { apps.splice(i,1); localStorage.setItem('placementApps', JSON.stringify(apps)); render(); }
render();