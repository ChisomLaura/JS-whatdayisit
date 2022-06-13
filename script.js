var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// console.log (weekday);
if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log("worky work!");
} else if (weekday === "Wednesday") {
  console.log("worky work!");
} else if (weekday === "Thursday") {
  console.log("worky work!");
} else if (weekday === "Friday") {
  console.log("weekend's almost here!");
} else {
  console.log("WEEKEND...YAYYY!");
}
