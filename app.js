
function dispAbout()
{
  console.log("about");
  document.querySelector('.topIntro').style.width="80%";
  document.getElementById('about').style.display="block";
  document.getElementById('skills').style.display="none";
  document.getElementById('projects').style.display="none";
  document.getElementById('education').style.display="none";
  document.getElementById('extras').style.display="none";
}
function dispSkill()
{
  console.log("skills");
  document.getElementById('about').style.display="none";
  document.querySelector('.topIntro').style.width="100%";
  document.getElementById('skills').style.display="block";
  document.getElementById('projects').style.display="none";
  document.getElementById('education').style.display="none";
  document.getElementById('extras').style.display="none";
}
function dispProject()
{
  console.log("project");
  document.querySelector('.topIntro').style.width="100%";
  document.getElementById('about').style.display="none";
  document.getElementById('skills').style.display="none";
  document.getElementById('projects').style.display="block";
  document.getElementById('education').style.display="none";
  document.getElementById('extras').style.display="none";
}
function dispEdu()
{
  console.log("education");
  document.querySelector('.topIntro').style.width="100%";
  document.getElementById('about').style.display="none";
  document.getElementById('skills').style.display="none";
  document.getElementById('projects').style.display="none";
  document.getElementById('education').style.display="block";
  document.getElementById('extras').style.display="none";
}
function dispExtra()
{
  console.log("extra");
  document.querySelector('.topIntro').style.width="100%";
  document.getElementById('about').style.display="none";
  document.getElementById('skills').style.display="none";
  document.getElementById('projects').style.display="none";
  document.getElementById('education').style.display="none";
  document.getElementById('extras').style.display="block";
}