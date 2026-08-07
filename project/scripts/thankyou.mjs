import "./footer.mjs"
const getString = window.location.search;

console.log(getString);


const myinfo = new URLSearchParams(getString);


const dateReceived = new Date().toLocaleString();



document.querySelector("#msg").innerHTML = `

<p>
Thank you, ${myinfo.get("name")}, for contacting us.
</p>


<p>
Your email is:
${myinfo.get("email")}
</p>


<p>
Your phone number is:
${myinfo.get("phone")}
</p>


<p>
Service requested:
${myinfo.get("service")}
</p>


<p>
Your message:
${myinfo.get("message")}
</p>


<p>
Request received on:
${dateReceived}
</p>

`;