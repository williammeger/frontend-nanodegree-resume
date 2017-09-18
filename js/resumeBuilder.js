let name = 'william meger';
const role = 'software engineer mobile platforms';

let work = {
    "jobs": [
          { 
            "employer": "Discovery Communications",
            "title": "Specialist - Digital Ad Tech",
            "location": "New York, NY",
            "dates": "Jan 2016 - Apr 2017",
            "description": "did things"
          },
          { 
            "employer": "Discovery Communications",
            "title": "Manager - Digital Ad Tech",
            "location": "New York, NY",
            "dates": "Apr 2017 - Present",
            "description": "did more things"
          }
    ]  
};

var bio = {
    "name": name,
    "role": role,
    "contacts": {
        "mobile": "680-758-1815",
        "email": "megerw@gmail.com",
        "github": "williammeger",
        "location": "New York, NY"
    },
    "skills": [
        "Ad Tech",
        "Python",
        "Javascript",
        "Piano",
        "Music Production"
    ]
};

let education = {
    "schools": [
        {
          "name": "",
          "location": "",
          "degree": "",
          "dates": "",
          "url": "",
          "majors": [],
          "onlineCourses": [
              {
                  "title": "",
                  "school": "",
                  "dates": "",
                  "urls": ""
              } 
          ]
        }, 
        {
          "name": "",
          "location": "",
          "degree": "",
          "dates": "",
          "url": "",
          "majors": [],
          "onlineCourses": [
              {
                  "title": "",
                  "school": "",
                  "dates": "",
                  "urls": ""
              } 
          ]
        } 
    ]  
};


let projects = {
    "projects": [
        {
            "title": "First One",
            "dates": "All summer 16",
            "description": "As you can see i went exploring with jellyfish.",
            "images": [ 'https://images.unsplash.com/photo-1493704074932-e1c9d6ccd131?dpr=1&auto=format&fit=crop&w=150&h=100&q=80&cs=tinysrgb&crop='
            ]
        }, 
        {
            "title": "Second One",
            "dates": "All summer 17",
            "description": "beautiful light photography",
            "images": [ 'https://images.unsplash.com/photo-1450013599129-f200df4c112f?dpr=1&auto=format&fit=crop&w=150&h=100&q=80&cs=tinysrgb&crop='
            ]
        } 
    ]
};


projects.display = function() {
   
    for (item in projects.projects ) {
      $('#projects:last').append(HTMLprojectStart);
      $('#projects:last').append(HTMLprojectTitle.replace(
    '%data%', projects.projects[item].title));
      $('#projects:last').append(HTMLprojectDates.replace(
    '%data%', projects.projects[item].dates));
      $('#projects:last').append(HTMLprojectDescription.replace(
    '%data%', projects.projects[item].description));

        if (projects.projects[item].images.length > 0) {
            for (var i = 0; i < projects.projects[item].images.length; i++) {
                $('#projects:last').append(HTMLprojectImage.replace(
              '%data%', projects.projects[item].images[i]));
            } 
        }
    }
}

projects.display();



$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

if (bio.skills.length !== 0) {
    $('#header').append(HTMLskillsStart);  
    $('#skills').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#skills').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#skills').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#skills').append(HTMLlocation.replace('%data%', bio.contacts.location));
}




function displayWork () {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);

        let formattedEmployer = HTMLworkEmployer.replace(  
      '%data%', work.jobs[job].employer);
        let formattedTitle = HTMLworkTitle.replace(
      '%data%', work.jobs[job].title);
        let formattedEmployerTitle = formattedEmployer + formattedTitle;
        let formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        let formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        let formattedDesc = HTMLworkDescription.replace('%data%', work.jobs[job].description);

        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedDesc);
    }
}

//displayWork();

