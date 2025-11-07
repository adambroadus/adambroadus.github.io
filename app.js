async function getStudents(selected_major) {
  var response = await fetch('cit5students.json');

  if (response.ok) {
    var data = await response.json();
    student_items = data.filter( (item) => item.major == selected_major );

    var templateText = document.getElementById('studentTemplate').innerHTML;
    var compiledTemplateText = Handlebars.compile(templateText);
    compiledHtml = compiledTemplateText({ rows: student_items });
    document.getElementById('studentsTable').innerHTML = compiledHtml;
  } 
  else {
    document.querySelector('#menuTable').innerHTML = "There was an error, or menu items not found";
  }

}
