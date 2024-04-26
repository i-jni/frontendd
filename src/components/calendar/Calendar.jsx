import { ScheduleMeeting } from "react-schedule-meeting";
import PropTypes from 'prop-types';

const availableTimeslots = [...Array(60).keys()].map((id) => {
  const date = new Date(new Date().setDate(new Date().getDate() + id));
  
  // dimanche
  if (date.getDay() === 0) {
    return null;
  }

  // samedi
  let endTime;
  if (date.getDay() === 6) {
    endTime = new Date(date.setHours(13, 0, 0, 0));
  } else {
    endTime = new Date(date.setHours(17, 0, 0, 0));
  }

  return {
    id,
    startTime: new Date(date.setHours(7, 0, 0, 0)),
    endTime
  };
}).filter(Boolean);


export default function Calendar({ onTimeSelect }) {
  const handleStartTimeSelect = (selectedTime) => {
    console.log(selectedTime);
    // Conversion en format attendu par un champ 'datetime-local'
    const startTime = selectedTime.startTime.toISOString().substring(0, 16);

    // Calcul de la date/heure de fin en ajoutant 120 minutes à la date/heure de début
    const endTimeDate = new Date(selectedTime.startTime.getTime() + 120 * 60000);
    const endTime = endTimeDate.toISOString().substring(0, 16);

    onTimeSelect(startTime, endTime);
  };

  return (
    <div className="App">
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#003366"
        eventDurationInMinutes={120}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={handleStartTimeSelect}
        startTimeListStyle="grid"
        lang_emptyListText="Aucun RDV disponible"
        lang_goToNextAvailableDayText="Prochaines disponibilités"
        format_nextFutureStartTimeAvailableFormatString="cccc, LLLL do"
        format_selectedDateDayTitleFormatString="cccc, LLLL do"
        format_selectedDateMonthTitleFormatString="LLLL yyyy"
        format_startTimeFormatString="h:mm a"
      />
    </div>
  );
}
Calendar.propTypes = {
  onTimeSelect: PropTypes.func.isRequired,
};
