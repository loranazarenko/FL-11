function getNumbers(str) {
  let strNum = [];
  for (let item in str) {
    if (str.hasOwnProperty(item)) {
      let vee = +str[item];
      if (typeof vee === 'number' && Number.isNaN(vee) === false) {
        console.log(vee);
        strNum.push(vee);
      }
    }
  }
  console.log(strNum);
  return strNum;
}

function findTypes() {
  let obj = {}; let types;
  for (let i = 0; i < arguments.length; i++) {
    types = typeof arguments[i];
    if (!obj.hasOwnProperty(types)) {
      obj[types] = 1;
    } else {
      obj[types] = obj[types] + 1;
    }
  }
  return obj;
}

function executeforEach(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    fun(arr[i]);
  }
}

function mapArray(arr, fun) {
  let arrNew = [];
  executeforEach(arr, el => arrNew.push(fun(el)));
  return arrNew;
}

function filterArray(arr, fun) {
  let arrNew = [];
  executeforEach(arr, el => {
    if (fun(el)) {
      arrNew.push(el);
    }
  });
  return arrNew;
}

function showFormattedDate(varDate) {
  let monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
  ];

  let day = varDate.getDate();
  let monthIndex = varDate.getMonth();
  let year = varDate.getFullYear();

  return 'Date: ' + monthNames[monthIndex] + ' ' + day + ' ' + year;

}

function canConvertToDate(varDate) {
  let dateNew = new Date(varDate);
  if (dateNew instanceof Date && !isNaN(dateNew)) {
    return true;
  }
  return false;
}

let milisec = 1000;
let hourDay = 24;
let hourMin = 60;
let secHour = 60;
let allMilisec = milisec * secHour * hourMin * hourDay;

function daysBetween(date1, date2) {
  let diffTime = date2.getTime() - date1.getTime();
  return Math.round(diffTime / allMilisec);
}

const febDays = 28;
function isLeapYear(year) {
  let d = new Date(year, 1, febDays);
  d.setDate(d.getDate() + 1);
  return d.getMonth() === 1;
}

const dayYear = 365, dayYearLeap = 366, yearAdult = 18;
function getAmountOfAdultPeople(data) {
  let arrMan = [];
  for (let i = 0; i < data.length; i++) {
    let litArr = data[i];
    for (let key in litArr) {
      if (litArr.hasOwnProperty(key)) {
        console.log(key, litArr[key]);
        if (key.trim() === 'birthday') {
          let now = new Date();
          let yearsDays = daysBetween(new Date(litArr[key]), now);
          let years = yearsDays / (isLeapYear(now.getFullYear()) ? dayYearLeap : dayYear);
          arrMan.push(years);
        }
      }
    }
  }
  return filterArray(arrMan, function (el) {
    return el > yearAdult;
  }).length;
}

const data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

function keys(obj) {
  let arKeys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arKeys.push(key);
    }
  }
  return arKeys;
}

function values(obj) {
  let arValues = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arValues.push(obj[key]);
    }
  }
  return arValues;
}