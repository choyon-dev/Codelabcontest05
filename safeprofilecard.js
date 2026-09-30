function generateProfileCard(user) {
  let name = user.name ?? "Anonymous";
  let city = user.address?.city ?? "Unknown";
  let followers = user.social?.followers ?? 0;

  return `${name} | ${city} | followers: ${followers}`;
}


// let test = generateProfileCard({
//   name: "Choyon",
//   address: { city: "Dhaka" },
//   social: { followers: 1200 }
// });


// let test = generateProfileCard({});

// let test = generateProfileCard({
//   name: "Rafi"
// });



let test = generateProfileCard({
  name: "",
  address: { city: "" },
  social: { followers: 0 }
});


console.log(test)