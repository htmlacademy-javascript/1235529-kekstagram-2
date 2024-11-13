
const createTimeInMinutes = (time) => {
  const timeArray = time.split(':');
  const timeMinutes = (timeArray[0] * 60) + +timeArray[1];
  return timeMinutes;
};


const checkLengthMeeting = (startDayTime, endDayTime, startMeeting, lengthMeeting) => {
  const startDayTimeMinutes = Number(createTimeInMinutes(startDayTime));
  const endDayTimeMinutes = Number(createTimeInMinutes(endDayTime));
  const startMeetingMinutes = Number(createTimeInMinutes(startMeeting));

  return (startMeetingMinutes >= startDayTimeMinutes && startMeetingMinutes <= (endDayTimeMinutes - lengthMeeting));

};
