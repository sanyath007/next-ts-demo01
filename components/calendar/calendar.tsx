import { ConfigProvider, Calendar } from "antd"
import type { Dayjs } from "dayjs"
import type { CalendarMode } from "antd/es/calendar/generateCalendar"
import dayjs from "dayjs"
import th from "antd/locale/th_TH"
import "dayjs/locale/th"

dayjs.locale('th')

export default function CalendarWrapper({ fullscreen, ...props }: { fullscreen: boolean }) {
    const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    return (
        <ConfigProvider locale={th}>
            <Calendar
                fullscreen={false}
                onSelect={(e) => console.log(e)}
                onPanelChange={onPanelChange}
            />
        </ConfigProvider>
    )
}
