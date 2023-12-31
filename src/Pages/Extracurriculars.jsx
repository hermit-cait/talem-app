import React from "react";
import Header from "../Components/Header";
import {useState, useEffect} from "react"
import { PlusCircleIcon, MinusCircleIcon, AdjustmentsHorizontalIcon, XCircleIcon, ArrowTopRightOnSquareIcon, TrashIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import TopButton from "../Components/TopButton";
import '../index.css';
import DescriptionEC from "../Components/DescriptionEc";
import LazyLoad from "react-lazy-load";
import ECItem from "../Components/ECItem";

export default function Extracurriculars(props) {

    let [dropState, setDropState] = useState({
        settingState: false,
        gradeState: false,
        environmentState: false,
        companyState : false,
        durationState: false,
        teamIndividualState: false,
        skillLevelState: false,
        locationState: false,
        activityCategoryState: false,
        generalFilterState: false,
        programmingState: false,
        engineeringState: false,
        mathScienceState: false,
        businessSocialState: false,
        humanityArtState: false,
    })

    const [showBanner, setShowBanner] = useState(true);
    const [showBookmarked, setShowBookmark] = useState(false)
    const [bookmarkedItems, setBookmarkedItems] = useState([]);

    useEffect(() => {
      const data = window.localStorage.getItem('MY_APP_STATE');
      if ( data !== null ) setShowBanner(JSON.parse(data));

      const bookmarkedData = window.localStorage.getItem('BOOKMARKED_ITEMS_LIST')
      if (bookmarkedData !== null) setBookmarkedItems(JSON.parse(bookmarkedData))
    }, []);
  
    useEffect(() => {
      window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
    }, [showBanner]); 

    useEffect(() => {
        window.localStorage.setItem('BOOKMARKED_ITEMS_LIST', JSON.stringify(bookmarkedItems));
      }, [bookmarkedItems]); 

    function handleBookmark(ec) {
        // Check if the item is already bookmarked
        const isBookmarked = bookmarkedItems.some(item => item.id === ec.id);
      
        if (isBookmarked) {
          // Item is already bookmarked, remove it
          const updatedItems = bookmarkedItems.filter(item => item.id !== ec.id);
          setBookmarkedItems(updatedItems);
        } else {
          // Item is not bookmarked, add it
          const updatedItems = [...bookmarkedItems, ec];
          setBookmarkedItems(updatedItems);
        }

        console.log(bookmarkedItems)
    }

    function handleBookmarkVal() {
        setShowBookmark(prevValue => !prevValue)
    }


    function changeAllDropdownState(bool) {
        const updatedDropState = Object.fromEntries(
          Object.entries(dropState).map(([key]) => [key, bool])
        );
      
        setDropState(updatedDropState);
      }
      

    let gradeItems = [
        {id: "allgrades", text: "All Grades", tooltip: "Search for activites for All Grades"},
        {id: "grade9", text: "Freshman", tooltip: "Search for activites ONLY for Freshman"},
        {id: "grade10", text: "Sophomore", tooltip: "Search for activites ONLY for Sophomores"},
        {id: "grade11", text: "Junior", tooltip: "Search for activites ONLY for Juniors"},
        {id: "grade12", text: "Senior", tooltip: "Search for activites ONLY for Seniors"}
    ]

    let companyItems = [
        {id: "nonprofit", text: "Nonprofit Organization"},
        {id: "businesscompany", text: "Business Enterprise"},
        {id: "governmentagency", text: "Government Agency"},
        {id: "educationalinstitution", text: "Educational Institution"},
        {id: "academicprogram", text: "Academic Program"}
    ]

    let durationItems = [
        {id: "shortterm", text: "Short-Term Committments"},
        {id: "longterm", text: "Long-Term Committments"}
    ]

    let teamIndividualItems = [
        {id: "teamandindividual", text:"Both Individual + Team"},
        {id: "individualbased", text: "Individual/Solo Activites Only"},
        {id: "teambased", text: "Team Based Activites Only"}
        
    ]

    let skillLevelItems = [
        {id: "allskillevels", text: "All Skill Levels"},
        {id: "beginnerfriendly", text: "Beginner-Friendly"},
        {id: "intermediatelevel", text: "Intermediate"},
        {id: "advancedlevel", text: "Advanced"},
    ]

    let locationItems = [
        {id: "global", text: "Global/Worldwide"},
        {id: "eastcoast", text: "East Coast (USA)"},
        {id: "westcoast", text: "West Coast (USA)"},
        {id: "midwest", text: "MidWest (USA)"},
        {id: "allusa", text: "Only USA"}
        
    ]

    let programmingItems = [
        {id: "cybersecurity", text: "Cybersecurity"},
        {id: "softwaredev", text: "Software Development"},
        {id: "machinelearning", text: "Machine Learning/AI"},
        {id: "competitiveprogramming", text: "Competitive Programming"}
    ]

    let engineeringItems = [
        {id: "mechengineering", text: "Mechanical Engineering"},
        {id: "electricalengineering", text: "Electrical Engineering"},
        {id: "aeroengineering", text: "Aerospace Engineering"}
    ]

    let activityCategoryItems = [
        {id: "communityservice", text: "Community Service"},
        {id: "research", text: "Academic Research"},
        {id: "competition", text: "Competition"},
        {id: "club", text: "Club"},
        {id: "program", text: "Pre-College Program"}
    ]

    let mathScienceItems = [
        {id: "astronomy", text: "Astronomy"},
        {id: "biology", text: "Biology"},
        {id: "chemistry", text: "Chemistry"},
        {id: "physics", text: "Physics"},
        {id: "environmentalscience", text: "Environmental Science"},
        {id: "mathematics", text: "Mathematics"},
        {id: "medicine", text: "Medicine"}
    ]

    let businessSocialItems = [
        {id: "business", text: "Business"},
        {id: "economics", text: "Economics"},
        {id: "marketing", text: "Marketing/Advertising"},
        {id: "entrepreneurship", text: "Entrepreneurship"},
        {id: "leadership", text: "Leadership"},
        {id: "globalgovernment", text: "Global Government"},
        {id: "law", text: "Law"},
        {id: "politics", text: "Politics"},
        {id: "history", text: "History"}
    ]

    let humanitiesArtItems   = [
        {id: "philosophy", text: "Philosophy"},
        {id: "literature", text: "Literature and Language"},
        {id: "film", text: "Film and Video Production"},
        {id: "music", text: "Music"},
        {id: "drama", text: "Theatre and Drama"},
        {id: "writing", text: "Writing"},
        {id: "foreign", text: "Foreign Languages"},
        {id: "photography", text: "Photography"},
        {id: "debate", text: "Debate"},
        {id: "art", text: "Art/Design"}
    ]

    let generalItems = [
        {id: "allsubjects", text: "All Subjects"},
        {id: "allstem", text: "All STEM"},
        {id: "allengineering", text: "All Engineering"},
        {id: "allprogramming", text: "All Programming"},
        {id: "allmathscience", text: "All Math + Science"},
    ]

    const getTagsWithTrueValue = (allFilters) => {
        return Object.values(allFilters)
          .filter((obj) => obj.value === true)
          .map((obj) => obj.tag);
    };

    const tagsArray = getTagsWithTrueValue(props.allFilters);    

    function handleGrade(name) {
        setDropState((prevArray) => {
            return {
                ...prevArray,
                [name] : !prevArray[name]
            }
        })
    }


    return (

        <div>
            <Header />
            <TopButton />
            <div className="bg-white dark:bg-slate-300">
                    
                <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >

                    <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f6a6c7] to-[#b1acff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    />

                </div>
                
                {/* Filter Content Area*/}
                <div className="grid grid-cols-1 md:grid-cols-4 h-max lg:gap-4">

                    {/* Column Span 1 items */}

                    {/* Button Settings Filters */}
                    <div className="col-span-1">

                        <div className="shadow-[0_0_10px_-7px] rounded-lg flex flex-col justify-center items-center py-4 mb-4">
                            <div className="filter bg-gradient-to-r from-yellow-300 to-yellow-500">
                                    <div className="filter-title" onClick={() => handleGrade("settingState")}>
                                        Settings
                                        <AdjustmentsHorizontalIcon className="dropdown-main"/>
                                    </div>

                                    {dropState.settingState && 
                                        <>
                                            <div className="w-full p-3 my-2 flex flex-col justify-center items-center gap-4 relative">
                                                <button className="w-9/12 bg-blue-500 p-3 rounded-md shadow-md font-outfit text-white flex justify-between" onClick={() => changeAllDropdownState(false)}>Close All Filters <XCircleIcon className="dropdown-main"/></button>
                                                <button className="w-9/12 bg-blue-500 p-3 rounded-md shadow-md font-outfit text-white flex justify-between" onClick={() => changeAllDropdownState(true)}>Open All Filters <PlusCircleIcon className="dropdown-main"/></button>
                                                <button className="w-9/12 bg-blue-500 p-3 rounded-md shadow-md font-outfit text-white flex justify-between" onClick={props.resetValues} >Clear All Filters <TrashIcon className="dropdown-main"/></button>
                                            </div>
                                        </>                                    
                                    }


                                </div>
                        </div>

                        <div className="shadow-[0_0_10px_-7px] rounded-lg flex flex-col justify-center items-center py-4">

                            {/* Grade Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("gradeState")}>
                                    Sort by Grade:
                                    {dropState.gradeState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>} 
                                </div>

                                {dropState.gradeState && 
                                    <div className="pt-2">
                                        {gradeItems.map((item) => {
                                            return (
                                                <div className="w-full group relative">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} name={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>                                           
                                                    </div>
                                                    <div className="pointer-events-none overflow-x-auto text-xs absolute -right-1 top-0 w-[40%] text-center opacity-0 transition-opacity group-hover:opacity-100 bg-blue-200 p-1 rounded-md font-outfit">
                                                        {item.tooltip}
                                                    </div>
                                                    
                                                </div>
                                                
                                            )
                                        })}
                                    </div>                                    
                                }


                            </div>
                        
                            {/* Environment Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("environmentState")}>
                                    Activity Environment/Format <br /> (In Person/Remote)
                                    {dropState.environmentState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.environmentState && 
                                    <div className="pt-2">
                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="inperson" type="checkbox" onChange={() => props.filterChange("inperson")} checked={props.checkVal["inperson"]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="inperson" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">In-Person</label>
                                        </div>
                                    </div>                            

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="remote" type="checkbox" onChange={() => props.filterChange("remote")} checked={props.checkVal["remote"]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="remote" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Remote</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex items-center mb-4">
                                            <input id="hybrid" type="checkbox" onChange={() => props.filterChange("hybrid")} checked={props.checkVal["hybrid"]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="hybrid" className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">Hybrid</label>
                                        </div>
                                    </div>
                                    </div>
                                }


                            </div>

                            {/* Company Type Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("companyState")}>
                                    Company Type
                                    {dropState.companyState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.companyState && 
                                    <div className="pt-2">
                                        {companyItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" value="" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }


                            </div>

                            {/* Duration Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("durationState")}>
                                    Activity Committment (Duration)
                                    {dropState.durationState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.durationState && 
                                    <div className="pt-2">
                                        {durationItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }


                            </div>

                            {/* Solo/Team Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("teamIndividualState")}>
                                    Solo vs. Team-Based Activites
                                    {dropState.teamIndividualState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.teamIndividualState && 
                                    <div className="pt-2">
                                        {teamIndividualItems.map((item) => { 
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }


                            </div>

                            {/* Skill Level Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("skillLevelState")}>
                                    Skill Level
                                    {dropState.skillLevelState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.skillLevelState && 
                                    <div className="pt-2">
                                        {skillLevelItems.map((item) => { 
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }


                            </div>

                            {/* Location Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("locationState")}>
                                    Activity/EC Location
                                    {dropState.locationState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.locationState && 
                                    <div className="pt-2">
                                        {locationItems.map((item) => { 
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }


                            </div>

                            {/* Category Type Filters */}
                            <div className="filter">
                                <div className="filter-title" onClick={() => handleGrade("activityCategoryState")}>
                                    Activity Category
                                    {dropState.activityCategoryState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.activityCategoryState && 
                                    <div className="pt-2">
                                        {activityCategoryItems.map((item) => { 
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }


                            </div>
                            
                        </div>

                        
                        
                        {/* Subject Filters*/}
                        <div className="shadow-[0_0_10px_-7px] rounded-lg flex flex-col justify-center items-center py-4 mt-4">

                            {/* General Filters (All STEM)*/}
                            <div className="filter bg-gradient-to-r from-green-300 to-green-500">
                                <div className="filter-title" onClick={() => handleGrade("generalFilterState")}>
                                    General Filters (All STEM, etc.) 
                                    {dropState.generalFilterState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.generalFilterState && 
                                    <div className="pt-2">
                                        {generalItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} name={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }


                            </div>

                            {/* Programming/Tech Filters*/}
                            <div className="filter bg-gradient-to-r from-purple-300 to-purple-600">
                                <div className="filter-title" onClick={() => handleGrade("programmingState")}>
                                    Programming/Tech 
                                    {dropState.programmingState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.programmingState && 
                                    <div className="pt-2">
                                        {programmingItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} name={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }


                            </div>

                            {/* Engineering Filters*/}
                            <div className="filter bg-gradient-to-r from-purple-300 to-purple-600">
                                <div className="filter-title" onClick={() => handleGrade("engineeringState")}>
                                    Engineering/Design
                                    {dropState.engineeringState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.engineeringState && 
                                    <div className="pt-2">
                                        {engineeringItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} name={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }


                            </div>

                            {/* Math/Science Filters*/}
                            <div className="filter bg-gradient-to-r from-purple-300 to-purple-600">
                                <div className="filter-title" onClick={() => handleGrade("mathScienceState")}>
                                    Mathematics/Science
                                    {dropState.mathScienceState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.mathScienceState && 
                                    <div className="pt-2">
                                        {mathScienceItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} name={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </div>

                             {/* Business/Social */}
                             <div className="filter bg-gradient-to-r from-purple-300 to-purple-600">
                                <div className="filter-title" onClick={() => handleGrade("businessSocialState")}>
                                    Business/Social Studies
                                    {dropState.businessSocialState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.businessSocialState && 
                                    <div className="pt-2">
                                        {businessSocialItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} name={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </div>

                            {/* Humanities/Art */}
                            <div className="filter bg-gradient-to-r from-purple-300 to-purple-600">
                                <div className="filter-title" onClick={() => handleGrade("humanityArtState")}>
                                    Humanities (+ Art)
                                    {dropState.humanityArtState ? <MinusCircleIcon className="dropdown-main"/> : <PlusCircleIcon className="dropdown-main"/>}
                                </div>

                                {dropState.humanityArtState && 
                                    <div className="pt-2">
                                        {humanitiesArtItems.map((item) => {
                                            return (
                                                <div className="w-full">
                                                    <div className="flex items-center mb-4">
                                                        <input id={item.id} name={item.id} type="checkbox" onChange={() => props.filterChange(item.id)} checked={props.checkVal[item.id]} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor={item.id} className="ml-2 text-lg text-gray-900 dark:text-gray-300 font-medium font-outfit">{item.text}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    
                    {/* Search bar/ Col-span-3 stuff*/}
                    <div className="col-span-3 shadow-[0_0_10px_-7px]">
                                
                            {/* Search Bar */}
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative flex">
                                <div className="w-full p-7 pb-2 flex justify-around">
                                    <input type="search" id="default-search" onChange={props.searchChange} className="w-[85%] xl:w-[95%] p-4 text-base text-gray-900 border border-none shadow-xl rounded-lg bg-slate-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-outfit" placeholder="Search for a specific extracurricular (Ex: Robotics)" required />
                                    <div onClick={handleBookmarkVal} className="relative p-2 w-[15%] xl:w-[5%] mx-2 shadow-xl rounded-lg bg-slate-100 flex justify-center items-center text-center border-2 font-outfit text-md cursor-pointer hover:border-2 hover:border-cyan-600">
                                        <BookmarkIcon className="w-6 h-6"/>
                                        <div className="absolute -top-3 -right-4 py-1 px-3 bg-cyan-600 text-white rounded-full">{bookmarkedItems.length}</div>
                                    </div>                                
                                </div>                                
                            </div>
                            

                            {showBanner &&                           
                                <div className="relative mx-8 bg-yellow-300 py-2 my-2 font-outfit px-6 rounded-lg text-yellow-800 text-center shadow-md">
                                    <div className="absolute text-3xl top-0 right-[8px] text-yellow-800 cursor-pointer rotate-45 hover:text-black" onClick={() => setShowBanner(false)}>+</div>
                                    Hi there, I'm Pranav! I'm the developer of <span className="text-blue-700">Talem</span> and I'm glad you're using it/finding it useful! If you want to support me 
                                    you can do so by <span className=""><a href="https://pranavk.vercel.app" target="_blank" className="text-blue-700 underline">viewing my portfolio</a>, <a href="https://ko-fi.com/pranavk" target="_blank" className="text-blue-700 underline">buying me a coffee</a>, <a href="https://discord.gg/tP97h8kWUx" className="text-blue-700 underline" target="_blank">or joining Talem's discord server!</a> </span>
                                    (You can get rid of this message by clicking the "X" at the top right. It won't come back, I promise!)
                                </div>
                            }       

                            <div className="ml-10 text-lg mt-4 font-outfit">{showBookmarked ? (bookmarkedItems.length > 0 ? bookmarkedItems.length + " Search Result(s)" : "Looks like you got no bookmarks ):") : props.ecArray.length + " Search Results"}</div>
                            
                            {/* Show Tags */}
                            <div className="mx-10 my-2 flex justify-center gap-2 flex-wrap">
                                {tagsArray.map((tag) => {
                                    return (<div onClick={() => props.removeTag(tag)} className="p-2 bg-blue-300 w-max font-outfit rounded-md shadow-sm flex items-center justify-between gap-2"><div>{tag}</div> <XCircleIcon className="dropdown-main mr-0 text-blue-700 hover:text-black"/></div>)
                                })}
                            </div>
                            

                            {/* Actual EC Components */}
                            <div className="w-full p-4 px-8 h-max flex-col gap-2 flex justify-center"> {/* Main EC holder */}
                                {props.ecArray.length === 0 ? (
                                    <>
                                        
                                        <div className="status flex justify-center" role="status"> {/* The loady spinny thingy */}
                                            <svg aria-hidden="true" className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>                                    
                                    </>                                   
                                    ) : (                         
                                    (showBookmarked ? bookmarkedItems : props.ecArray).map((ec) => (
                                        <ECItem key={ec.id} ec={ec} handleBookmark={handleBookmark} bookmarkedItems={bookmarkedItems} />
                                    ))
                                )}
                            </div>

                    </div>
                    

                </div>



                </div>
            </div>
        </div>
    )
}