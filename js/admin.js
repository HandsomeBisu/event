// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-OybGCrxlayMUmcOq6oi-lr8w-C5MJ_c",
    authDomain: "dpsevent-b526d.firebaseapp.com",
    projectId: "dpsevent-b526d",
    storageBucket: "dpsevent-b526d.firebasestorage.app",
    messagingSenderId: "940533062410",
    appId: "1:940533062410:web:12aef5874e800e402038f3",
    measurementId: "G-RWR8ZCB3C2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const participantList = document.getElementById('participant-list');

db.collection('applicants').orderBy('submittedAt', 'desc').get().then((querySnapshot) => {
    let count = 1;
    querySnapshot.forEach((doc) => {
        const participant = doc.data();
        const submittedAt = participant.submittedAt.toDate();
        const dateString = `${submittedAt.getFullYear()}-${String(submittedAt.getMonth() + 1).padStart(2, '0')}-${String(submittedAt.getDate()).padStart(2, '0')}`;
        
        const row = `
            <tr>
                <th scope="row">${count}</th>
                <td>${participant.name}</td>
                <td>${participant.phone}</td>
                <td>${participant.minecraftId}</td>
                <td>${participant.discordId}</td>
                <td>${dateString}</td>
            </tr>
        `;
        participantList.innerHTML += row;
        count++;
    });
});
