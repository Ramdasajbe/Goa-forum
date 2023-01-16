/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
    import React from 'react';

    function Calender() {
    return(<></>)

    }

// function Calender() {

//     const [myEvents, setEvents] = React.useState([]);

//     React.useEffect(() => {
//         getJson('https://trial.mobiscroll.com/custom-events/', (events) => {
//             setEvents(events);
//         }, 'jsonp');
//     }, []);
    
//     const view = React.useMemo(() => {
//         return {
//             calendar: { labels: false, popover: true, popoverClass: 'custom-event-popover' }
//         };
//     }, []);
    
//     const getParticipant = (id) => {
//         switch (id) {
//             case 1:
//                 return {
//                     img: 'https://img.mobiscroll.com/demos/m1.png',
//                     name: 'Barry L.'
//                 };
//             case 2:
//                 return {
//                     img: 'https://img.mobiscroll.com/demos/f1.png',
//                     name: 'Hortense T.'
//                 };
//             case 3:
//                 return {
//                     img: 'https://img.mobiscroll.com/demos/m2.png',
//                     name: 'Carl H.'
//                 };
//         }
//     };
    
//     const add = (ev, data) => {
//         ev.stopPropagation();
//         toast({            message: getParticipant(data.participant).name + '\'s event clicked'
//         });
//     };
    
//     const renderEventContent = React.useCallback((data) => {
//         return <React.Fragment>
//             <div>{data.title}</div>
//                 <div className="md-custom-event-cont">
//                     <img className="md-custom-event-img" src={getParticipant(data.original.participant).img} />
//                     <div className="mbsc-custom-event-name">{getParticipant(data.original.participant).name}</div>
//                     <Button className="md-custom-event-btn" color="secondary" variant="outline" onClick={(domEvent) => add(domEvent, data.original)}>Add participant</Button>
//                 </div>
//         </React.Fragment>
//     });

//     return (
//         <div>
//             <Eventcalendar
//                 theme="ios" 
//                 themeVariant="dark"
//                 clickToCreate={false}
//                 dragToCreate={false}
//                 dragToMove={false}
//                 dragToResize={false}
//                 renderEventContent={renderEventContent}
//                 data={myEvents}
//                 view={view}
//            />
//        </div>
//     ); 
// }



// import { Eventcalendar, getJson, toast } from '@mobiscroll/react';

// function Calender() {
//     const [myEvents, setEvents] = React.useState([]);

//     React.useEffect(() => {
//         getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
//             setEvents(events);
//         }, 'jsonp');
//     }, []);
    
//     const onEventClick = React.useCallback((event) => {
//         toast({
//             message: event.event.title
//         });
//     }, []);
    
//     const view = React.useMemo(() => {
//         return {
//             calendar: { type: 'month' },
//             agenda: { type: 'month' }
//         };
//     }, []);

//     return (
//         <Eventcalendar
//             theme="ios" 
//             themeVariant="light"
//             clickToCreate={false}
//             dragToCreate={false}
//             dragToMove={false}
//             dragToResize={false}
//             data={myEvents}
//             view={view}
//             onEventClick={onEventClick}
//        />
//     ); 
// }

// import { Eventcalendar, CalendarPrev, CalendarNav, CalendarNext, CalendarToday, SegmentedGroup, SegmentedItem, getJson, setOptions } from '@mobiscroll/react';

// setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
// });

// function Calender() {
//     const [calendarType, setCalendarType] = React.useState('quarter');
//     const [myEvents, setEvents] = React.useState([]);

//     const view = React.useMemo(() =>
//         calendarType === 'quarter' ? {
//             calendar: {
//                 type: 'month',
//                 size: 3
//             }
//         } : {
//             calendar: {
//                 type: 'year'
//             }
//         }, [calendarType]);
        
//     const calHeight = React.useMemo(() => calendarType === 'quarter' ? 'auto' : 'height:100%', [calendarType]);
        
//     const calendarHeaderSwitch = () => {
//         return <React.Fragment>
//             <CalendarNav />
//             <div className="quarter-year-header-picker">
//                 <SegmentedGroup value={calendarType} onChange={changeView}>
//                     <SegmentedItem value="quarter">Quarter</SegmentedItem>
//                     <SegmentedItem value="year">Year</SegmentedItem>
//                 </SegmentedGroup>
//             </div>
//             <CalendarPrev />
//             <CalendarToday />
//             <CalendarNext />
//         </React.Fragment>;
//     }

//     const changeView = (event) => {
//         setCalendarType(event.target.value);
//     }

//     React.useEffect(() => {
//         getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
//             setEvents(events);
//         }, 'jsonp');
//     }, []);

//     return (
//         <Eventcalendar
//             data={myEvents}
//             view={view}
//             height={calHeight}
//             renderHeader={calendarHeaderSwitch}
//         />
//     );
// }


export default Calender;