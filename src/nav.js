const nav = () => {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");

    const inbox = document.createElement("div");
    inbox.setAttribute("id", "inbox");
  
    // inbox icon 
    const inboxIcon = document.createElement("i");
    inboxIcon.classList.add("fas", "fa-inbox");
    inbox.appendChild(inboxIcon);

    // inbox title 
    const inboxTitle = document.createElement("h3");
    inboxTitle.textContent = "Inbox";
    inbox.appendChild(inboxTitle);

    const today = document.createElement("div");
    today.setAttribute("id", "today");

    // today icon 
    const todayIcon = document.createElement("i");
    todayIcon.classList.add("far", "fa-calendar");
    today.appendChild(todayIcon);

    // today title
    const todayTitle = document.createElement("h3");
    todayTitle.textContent = "Today";
    today.appendChild(todayTitle);

    const upcoming = document.createElement("div");
    upcoming.setAttribute("id", "upcoming");

    // upcoming icon 
    const upcomingIcon = document.createElement("i");
    upcomingIcon.classList.add("far", "fa-calendar-alt");
    upcoming.appendChild(upcomingIcon);

    // upcoming title
    const upcomingTitle = document.createElement("h3");
    upcomingTitle.textContent = "Upcoming";
    upcoming.appendChild(upcomingTitle);

    menu.appendChild(inbox);
    menu.appendChild(today);
    menu.appendChild(upcoming);

    return menu; 
};

export { nav };