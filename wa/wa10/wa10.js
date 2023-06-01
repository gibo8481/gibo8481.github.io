// Problem 1
data =[
    {"name":"Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raise": true},
    {"name":"Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raise":true},
    {"name": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raise": false},
    {"name":"Anna", "department":"Tech", "designation":"Executive", "salary": 25600,"raise": false}
  
]
console.log(data);

// Problem 2
company = [
    {"companyName": "Tech Stars", "website":"www.techstars.site", "employees": data}
]
console.log(company);

//Problem 3
console.log(data[3]);

// Problem 4
let total = 0;
for(const i in data) total += data[i]["salary"];

console.log(total);

// Problem 5
for(const i in data)
{
    if(data[i]["raise"])
    {
        data[i]["salary"] *= 1.1;
        data[i]["raise"] = false;
    }
}
console.log(data[0]);
console.log(data[1]);


// Problem 6
const wfh = ["Anna", "Sam"]; // 
for(const i in data)
{
    if(wfh.includes(data[i]["name"])) data[i]["wfh"] = true;
    else data[i]["wfh"] = false;

}
console.log(data[0]);
console.log(data[3]);
