exports.seed = function (knex) {
  // Deletes ALL existing entries in the 'homes' table
  return knex('homes').del()
    .then(function () {
      // Inserts seed entries into the 'homes' table
      return knex('homes').insert([
        {
          "price": "$267,663.78",
          "image_url": "http://placehold.it/2000x1000",
          "address": "839 Huron Street, Catharine, Pennsylvania, 47153",
          "about": "Ex laboris reprehenderit cillum est do mollit. Elit tempor velit elit est ex consectetur ad enim labore. Eu laborum voluptate commodo deserunt duis ullamco ad ex nisi. Laboris nostrud est nisi incididunt excepteur et irure mollit consequat adipisicing et officia.",
          "registered": "Friday, May 25, 2018 10:19 PM"
        },
        {
          "price": "$261,397.35",
          "image_url": "http://placehold.it/2000x1000",
          "address": "310 Ash Street, Deseret, Arizona, 16253",
          "about": "Ex laboris reprehenderit cillum est do mollit. Elit tempor velit elit est ex consectetur ad enim labore. Eu laborum voluptate commodo deserunt duis ullamco ad ex nisi. Laboris nostrud est nisi incididunt excepteur et irure mollit consequat adipisicing et officia.",
          "registered": "Saturday, December 24, 2016 12:04 AM"
        },
        {
          "price": "$326,646.48",
          "image_url": "http://placehold.it/2000x1000",
          "address": "201 Grace Court, Ruckersville, Utah, 86616",
          "about": "Aute exercitation ullamco ex est minim eu voluptate officia deserunt culpa amet nisi fugiat. Adipisicing officia nulla consectetur duis voluptate excepteur sint eiusmod dolore sunt voluptate ad. Cillum mollit adipisicing fugiat sunt proident laborum aliquip in ipsum ipsum ut quis Lorem duis.",
          "registered": "Saturday, July 27, 2019 12:29 PM"
        },
        {
          "price": "$293,292.11",
          "image_url": "http://placehold.it/2000x1000",
          "address": "897 Lefferts Place, Hillsboro, Iowa, 68307",
          "about": "Ex eu dolor aliqua cillum et ipsum. Incididunt sunt sunt voluptate pariatur officia occaecat deserunt laborum quis fugiat ut dolor non. Voluptate amet magna deserunt enim exercitation ea ad. Nisi mollit laborum anim irure nulla. Velit Lorem in velit cillum. Laboris id quis aliqua velit est incididunt ex nostrud laboris incididunt.",
          "registered": "Saturday, November 11, 2017 12:14 PM"
        },
        {
          "price": "$389,399.84",
          "image_url": "http://placehold.it/2000x1000",
          "address": "795 Tapscott Street, Summerset, Colorado, 91532",
          "about": "Nulla incididunt ex amet nulla ea dolor incididunt laborum sunt ipsum est officia duis Lorem. Sit commodo fugiat qui anim ipsum proident ex amet. Cillum ut aliquip reprehenderit et amet sunt sint exercitation incididunt.",
          "registered": "Monday, May 23, 2016 12:47 PM"
        },
        {
          "price": "$111,975.03",
          "image_url": "http://placehold.it/2000x1000",
          "address": "733 Crawford Avenue, Grenelefe, Kentucky, 33265",
          "about": "Incididunt consectetur excepteur ut veniam laborum. Nulla culpa commodo cillum exercitation mollit. Lorem incididunt occaecat nostrud anim nisi sunt laborum mollit irure.",
          "registered": "Thursday, July 13, 2017 8:28 AM"
        },
        {
          "price": "$223,215.85",
          "image_url": "http://placehold.it/2000x1000",
          "address": "244 Fleet Walk, Woodburn, Missouri, 46055",
          "about": "Quis labore amet sunt ut cupidatat. Reprehenderit et do aute ad dolor occaecat aliqua commodo. Esse esse consequat do anim ad nostrud magna. Elit adipisicing culpa consequat aute quis nostrud anim officia. Laborum enim officia fugiat sint eu nulla sit cillum magna exercitation ipsum laborum reprehenderit exercitation. Veniam adipisicing dolore ea aliquip et consectetur adipisicing non proident ipsum. Ut ipsum officia non nisi occaecat dolore magna duis commodo excepteur mollit enim deserunt cupidatat.",
          "registered": "Sunday, June 9, 2019 11:56 PM"
        },
        {
          "price": "$143,756.05",
          "image_url": "http://placehold.it/2000x1000",
          "address": "354 Bayview Avenue, Chautauqua, New Hampshire, 54404",
          "about": "Non reprehenderit irure est elit irure nulla cupidatat commodo ullamco. Deserunt anim amet voluptate veniam eiusmod laboris tempor irure ut eu sunt enim. Pariatur reprehenderit aute ipsum occaecat duis nostrud culpa nostrud cupidatat. Commodo irure cupidatat velit cupidatat ut nulla. Labore consectetur quis id irure. Pariatur veniam duis officia consequat commodo aliquip cillum labore reprehenderit sunt.",
          "registered": "Tuesday, March 10, 2020 4:09 PM"
        }
      ]);
    });
};
