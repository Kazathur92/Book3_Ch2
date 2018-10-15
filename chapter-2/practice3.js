const campaign = {
  ElizabethSanger: [ 
    {
    biography: [
        {
        fullName: "Elizabeth Sanger",
        birthCity: "Nashville",
        birthState: "Tennessee",
        birthDate: "1988",
        age: "30",
        },
      ],
    imageGallery: [
      {
        headShot: "https://cdn2-www.cattime.com/assets/uploads/2016/03/cats-politics-political-office.jpg",
        family: "http://www.tridanim.com/images/worth1000.s3.amazonaws.com/submissions/815000/815034_f2a4_625x1000.jpg",
        constituents: "http://fatcatart.ru/wp-content/uploads/2012/03/cats-meeting1.jpg",
      },
    ],
    policies: [
      {
        taxes: "Raise Taxes",
        jobs: ["Increased Wages", "More Jobs"],
        infraStructure: "",
        healthCare: "Cheaper Healthcare",
        lawEnforcement: "Better Security",
      },
    ],
    missionStatement: {
      statement: "My mission is to help tennessee grow",
    },
  },
  ],
  volunteers: [
    {
    name: "Alfonso Miranda",
    age: "26",
    },
    {
    name: "Noah Woods",
    age: "20",
    },
  ],
  events: {
    madisonRally: "10-12-2018",

  },
  importantLinks: {
    donations: "https://www.vertex42.com/WordTemplates/donation-form-template.html",
    voting: "https://sos.tn.gov/elections/voter-information",

  }
}

// #1 add to image

addToImageGallery = () => {
  campaign.ElizabethSanger[0].imageGallery.push("https://woopy.jpg")
}
console.log(addToImageGallery)

// function addToImageGallery () {
//   return campaign.ElizabethSanger[0].imageGallery.push("https://i.ebayimg.com/images/g/tAEAAOxyOlhS3vly/s-l300.jpg")
// }

// -------------------
// addToImageGallery()


// #2 change biography

function changeBiography () {
  campaign.ElizabethSanger[0].biography[0].birthCity = "McAllen"
  console.log(campaign.ElizabethSanger[0].biography[0].birthCity)
}

changeBiography()
// ------------------

// #3 change statement

function changeStatement () {
  campaign.ElizabethSanger[0].missionStatement.statement = "I love hotdogs"
  console.log(campaign.ElizabethSanger[0].missionStatement.statement)
}

changeStatement()




