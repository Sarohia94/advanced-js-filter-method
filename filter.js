  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

// filter method always returns an array ( [] ),
// even if it’s an array of only one element.  If you log paul to the console, you’ll see it’s
// actually an array containing the paul object.
// callback parameter is arbitrary so person used as opposed to people.
const paul = people.filter(person => person.name === "Paul");
console.log(paul);

//Since this callback function is arbitrary,  
//we could shorten it even further by changing  the person parameter to just p.

// If I want to access the object itself ( {} ), I could
// simply append [0] to the end up here to get the  first and only element in the resulting array.
const paul2 = people.filter(p => p.name === "Paul")[0];
console.log(paul2);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

//for more complex  filtering, it’s easier to read if you write  
//your callback function first, and then just pass  it to the filter method

const has5yrsExp = skill => skill.yrsExperience >= 5;

const hasStrongSkills = student => {student.skills.filter(has5yrsExp).length > 0;};

const candidates = students.filter(hasStrongSkills);

console.log(candidates);