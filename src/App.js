import React, { useEffect, useState } from 'react';
import './index.css';
import Homepage from './Pages/Homepage';
import Extracurriculars from './Pages/Extracurriculars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Analytics } from '@vercel/analytics/react'

const firebaseConfig = {
  apiKey: "AIzaSyB-R34s08Noa6MHOXTYMH69n8hmJfPflxY",
  authDomain: "talem-app.firebaseapp.com",
  projectId: "talem-app",
  storageBucket: "talem-app.appspot.com",
  messagingSenderId: "573018711035",
  appId: "1:573018711035:web:c297502dc0a64b3ae2615e",
  measurementId: "G-RJY34CXQKX"
};

initializeApp(firebaseConfig);

function App() {
  
  const [extracurricularsArray, setExtracurricularsArray] = useState([]);
  const [burnerArray, setBurnerArray] = useState([])

  function handleSearchChange(event) {
    console.log(event.target.value)

    if (event.target.value === "") {
      setBurnerArray(extracurricularsArray)
    } else {
      let filteredData = extracurricularsArray.filter((extracurricular) => {
        if (extracurricular.name.toLowerCase().includes(event.target.value.toLowerCase())) {
          return true;
        }
      })

      setBurnerArray(filteredData)
    }
  }

  const [filterValues, setFilterValues] = useState({
    allgrades: false,
    grade9: false,
    grade10: false,
    grade11: false,
    grade12: false,
    inperson: false,
    remote: false,
    hybrid: false,
    nonprofit: false,
    businesscompany: false,
    governmentagency: false,
    educationalinstitution: false,
    shortterm: false,
    longterm: false,
    teamandindividual: false,
    individualbased: false,
    teambased: false,
    allskillevels: false,
    beginnerfriendly: false,
    intermediatelevel: false,
    advancedlevel: false,
    global: false,
    eastcoast: false,
    westcoast: false,
    midwest: false,
    allusa: false,
    allprogramming: false,
    cybersecurity: false,
    softwaredev: false,
    machinelearning: false,
    allengineering: false, // Start Here
    mechengineering: false,
    electricalengineering: false,
    aeroengineering: false
  });

  const handleFilterChange = (name) => {

    setFilterValues((prevArray) => {
      const updatedValues = {
        ...prevArray,
        [name]: !prevArray[name]
      }

      const filteredData = extracurricularsArray.filter((ec) => {
        let ecTags = [ec.commitment, ec.environment, ec.location, ec.skill, ec.soloTeam, ec.type]

        if (typeof ec.grade === "string") {
          ecTags.push(ec.grade)
        } else {
          let grades = ec.grade
          for (let i = 0; i < grades.length; i++) {
            ecTags.push(grades[i]);
          }
        }

        let subjects = ec.subjects

        for (let i = 0; i < subjects.length; i++) {
          ecTags.push(subjects[i]);
        }


        // if (updatedValues.grade9 && ecTags.includes("All Grades") ||
        //     updatedValues.grade10 && ecTags.includes("All Grades") ||
        //     updatedValues.grade11 && ecTags.includes("All Grades") ||
        //     updatedValues.grade12 && ecTags.includes("All Grades")        
        // ) {
        //   return true
        // }

        // Grade Filters
        if (updatedValues.allgrades && !ecTags.includes("All Grades")) {
          return false
        }
        
        if (updatedValues.grade9 && !ecTags.includes("9th Grade")) {
          return false
        }

        if (updatedValues.grade10 && !ecTags.includes("10th Grade")) {
          return false
        }

        if (updatedValues.grade11 && !ecTags.includes("11th Grade")) {
          return false
        }

        if (updatedValues.grade12 && !ecTags.includes("12th Grade")) {
          return false
        }

        // Environment Filters
        if (updatedValues.inperson && !ecTags.includes("In Person")) {
          return false
        }

        if (updatedValues.remote && !ecTags.includes("Remote/Virtual")) {
          return false
        }


        if (updatedValues.hybrid && !ecTags.includes("Hybrid")) {
          return false
        }

        // Acitivity Type filters
        if (updatedValues.nonprofit && !ecTags.includes("Nonprofit Organization")) {
          return false
        }

        if (updatedValues.businesscompany && !ecTags.includes("Business")) {
          return false
        }
        
        if (updatedValues.governmentagency && !ecTags.includes("Government Agency")) {
          return false
        }

        if (updatedValues.educationalinstitution && !ecTags.includes("Educational Institution")) {
          return false
        }

        // Work Commitment filter
        if (updatedValues.shortterm && !ecTags.includes("Short-Term")) {
          return false
        }

        if (updatedValues.longterm && !ecTags.includes("Long-Term")) {
          return false
        }

        // Cooperation style filters
        if (updatedValues.teamandindividual && !ecTags.includes("Both Individual + Team")) {
          return false
        }

        if (updatedValues.individualbased && !ecTags.includes("Individual-Based")) {
          return false
        }

        if (updatedValues.teambased && !ecTags.includes("Team-Based")) {
          return false
        }

        // Skill filters
        if (updatedValues.allskillevels && !ecTags.includes("All Skill Levels")) {
          return false
        }

        if (updatedValues.beginnerfriendly && !ecTags.includes("Beginner Friendly")) {
          return false
        }

        if (updatedValues.intermediatelevel && !ecTags.includes("Intermediate")) {
          return false
        }

        if (updatedValues.advancedlevel && !ecTags.includes("Advanced")) {
          return false
        }

        // Location filters
        if (updatedValues.global && !ecTags.includes("Global/Worldwide")) {
          return false
        }

        if (updatedValues.eastcoast && !ecTags.includes("East Coast (USA)")) {
          return false
        }

        if (updatedValues.westcoast && !ecTags.includes("West Coast (USA)")) {
          return false
        }

        if (updatedValues.midwest && !ecTags.includes("Mid West(USA)")) {
          return false
        }

        if (updatedValues.allusa && !ecTags.includes("USA Only")) {
          return false
        }

        // Programming filters
        if (updatedValues.allprogramming && !ecTags.includes("All Programming")) {
          return false
        }

        if (updatedValues.cybersecurity && !ecTags.includes("Cybersecurity")) {
          return false
        }

        if (updatedValues.softwaredev && !ecTags.includes("Software Development")) {
          return false
        }

        if (updatedValues.machinelearning && !ecTags.includes("Machine Learning/AI")) {
          return false
        }

        // Engineering/Design filters
        if (updatedValues.allengineering && !ecTags.includes("All Engineering")) {
          return false
        }

        if (updatedValues.mechengineering && !ecTags.includes("Mechanical Engineering")) {
          return false
        }

        if (updatedValues.electricalengineering && !ecTags.includes("Electrical Engineering")) {
          return false
        }

        if (updatedValues.aeroengineering && !ecTags.includes("Aerospace Engineering")) {
          return false
        }

        return true
  
      })  
      setBurnerArray(filteredData)

      console.log(updatedValues)
      return updatedValues

    })

  };
  
  function resetFilterValues() {
    const updatedFilterValues = Object.keys(filterValues).reduce((obj, key) => {
      obj[key] = false;
      return obj;
    }, {});

    setFilterValues(updatedFilterValues);
    handleFilterChange(null) // Just activating the check filter function so it can properly register the fact that everything is cleared
  };
  

  useEffect(() => {
    const fetchExtracurriculars = async () => {
      try {
        const db = getFirestore();
        const extracurricularsRef = collection(db, 'extracurriculars');
        const snapshot = await getDocs(extracurricularsRef);
        const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setExtracurricularsArray(data);
        setBurnerArray(data)
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchExtracurriculars();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/extracurriculars" element={<Extracurriculars ecArray={burnerArray} resetValues={resetFilterValues} filterChange={handleFilterChange} checkVal={filterValues} searchChange={handleSearchChange}/>}/>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
