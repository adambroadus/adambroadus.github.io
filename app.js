// Program 5 — filter & render cit5students.json via Handlebars
async function getStudents(selected_major) {
  var response = await fetch('cit5students.json'); // GET JSON in same folder

  if (response.ok) {
    var data = await response.json();

    // keep only the chosen major, then sort alphabetically by name
    var rows = data
      .filter(function (s) { return s.major === selected_major; })
      .sort(function (a, b) { return a.name.localeCompare(b.name); });

    // compile & render template (matches in-class example flow)
    var templateText = document.getElementById('studentTemplate').innerHTML;
    var compiled = Handlebars.compile(templateText);
    var html = compiled({ rows: rows });

    document.getElementById('studentsTable').innerHTML = html;
  } else {
    document.getElementById('studentsTable').innerHTML =
      'There was an error, or students not found';
  }
}