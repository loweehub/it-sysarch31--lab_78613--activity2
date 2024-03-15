

// import React from 'react';

// function Student({ photo, name, email }) {
//     return (
//       <div className="student">
//         <img src={photo} alt="profile picture" className="photo" />
//         <h2 id="name">{name}</h2>
//         <p id="email">{email}</p>
//       </div>
//     );
// }

// export default Student;
import React from 'react';

function Student({ photo, name, email }) {
    return (
        <div className="student">
            <img src={photo} alt="profile picture" className='photo'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}




export default Student;