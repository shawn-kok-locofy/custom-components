import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";

type Props = {
  placeholder?: string;
};

const Icon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="CalendarTodayFilled">
      <path
        id="Vector"
        d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z"
        fill="#F2F2F2"
      />
    </g>
  </svg>
);

const DatePicker = ({ placeholder = "Date" }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIDatePicker
        slotProps={{
          field: {
            sx: {
              border: "1px solid red",
            },
          },
          openPickerIcon: {
            component: () => <Icon />,
          },
          textField: {
            placeholder,
            sx: {
              flex: 1,
              display: "inline-flex",
              "& fieldset": { borderColor: "#383838" },
              "&:hover fieldset": { borderColor: "#1976d2 !important" },
              "& .MuiInputBase-root": {
                height: 48,
                flex: 1,
              },
              "& .MuiInputBase-input": {
                color: "#383838",
                fontSize: 14,
                fontStyle: "normal",
                lineHeight: 24,
                boxSizing: "border-box",
                height: 48,
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
