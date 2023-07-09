import { useState }  from 'react';
import  DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import classes from'../Ngay/Ngay.module.css'

const DatePickerProps = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => 
  {
    setStartDate(date);
  };
  return (
    <div className={classes.Date}>  
      <DatePicker  
          showIcon
          selected={startDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
      ></DatePicker>
    </div>
  );
};

export default DatePickerProps;