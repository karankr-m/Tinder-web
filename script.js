// get the data
var users = [
    {profilePic: "https://images.unsplash.com/photo-1632072934313-6dbea41066b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRhaXQlMjBnaXJsfGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1632072935218-216224d82bba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", 
        pendingMessages: 4,
         location: "Barakar, India", 
         name: "shriti", 
         age: 18,
        interests: ["music", "dance", "reading", "coding"],
        bio: "I am a student and I love to code. I am a music lover and I love to dance. I am a bookworm and I love to read.",
        isFriend: null
    },
    {profilePic: "https://images.unsplash.com/photo-1616536864056-762d107cd618?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
        displayPic: "https://images.unsplash.com/photo-1617132834382-043a3af019d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        pendingMessages: 5,
        location: "kulti, India", 
        name: "rani", 
        age: 19,
       interests: ["music", "dance", "reading", "coding"],
       bio: "I am a student and I love to code. I am a music lover and I love to dance. I am a bookworm and I love to read.",
       isFriend: null
   },
   {profilePic: "https://images.unsplash.com/photo-1618374889392-7bd8f8aa0dde?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    displayPic: "https://images.unsplash.com/photo-1618374423266-4570a1600edd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    pendingMessages: 3,
    location: "asansol, India", 
    name: "laddo", 
    age: 17,
   interests: ["music", "dance", "reading", "coding"],
   bio: "I am a student and I love to code. I am a music lover and I love to dance. I am a bookworm and I love to read.",
   isFriend: null
},
{profilePic: "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGFpdCUyMGdpcmwlMjBzcmVlbGVlbGF8ZW58MHx8MHx8fDA%3D", 
    displayPic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    pendingMessages: 6,
    location: "durgapur, India", 
    name: "sweety", 
    age: 20,
   interests: ["music", "dance", "reading", "coding"],
   bio: "I am a student and I love to code. I am a music lover and I love to dance. I am a bookworm and I love to read.",
   isFriend: null
},
];

function select(elem){
      return document.querySelector(elem);

}

var curr = 0;

(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src =users[curr+1] .displayPic;

  select(".prflimg img"). src = users[curr].profilePic;
  select(".badge h5")  .textContent = users[curr].pendingMessages;

  curr = 2;
})(); 