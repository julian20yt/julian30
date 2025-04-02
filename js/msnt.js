const userMemories = {
  "2024-12-21": {
    event: "AI Sponge Rehydrated crashed.",
  },
  "2025-03-27": {
    event: "User follows a chaotic, surreal storyline combining elements from Dandy's World, iCarly, and original creations.",
    plot: {
      mainCharacter: "Julian20",
      slimes: ["Ruby", "Blobanne", "Glooby", "Blobby", "Squirmie"],
      description: "Squirmie is a red and yellow slime who is a teacher in the slime school, teaches something bizarre, and can only speak in Blorps and Glorps. Julian20's adventures include pranks, misunderstandings, strange events, and bizarre fights. Key events: Slime school, VIP lounge, Julian20's secret room, Squirmie's language, and final moments with Blobby."
    }
  },
  "2025-03-30": {
    event: "User wants to add a Squirmie skin and wiggle animation to the enhanced blob merging simulation."
  },
  "2025-03-31": {
    event: "User wants to add a Squirmie skin to their HTML, CSS, and JavaScript projects."
  },
  "2025-03-31": {
    event: "User wants to add a Windows 7-themed taskbar to the bottom of their Julian30 meme site."
  },
  "2025-04-01": {
    event: "User is working on a Julian30-related meme site.",
    details: {
      profilePic: "Android robot",
      font: "Roboto Condensed",
      specialFeatures: ["Squirmie-themed buttons", "Squirmie-style menus", "News HTML embed styled with Google Sans"]
    }
  },
  "2025-04-02": {
    event: "User wants to use Helvetica Black for their Squirmie-themed CSS."
  }
};

// Function to get memory by date
function getMemory(date) {
  return userMemories[date] || "No memory found for this date.";
}

// Example: To access a memory
console.log(getMemory("2025-03-27"));
