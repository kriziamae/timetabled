import Event from './Event'
const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Fancy Dinner 🎩'  color = 'green' location = 'Maple & Ash'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk' color = 'green' location = '355 E Ohio St'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway' color = 'pink' location = 'Grand Station'/>
                        <td></td>
                        <td></td>
                        <Event event='Starbucks' color = 'blue' location='646 Michigan Ave' />
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event event='Art Institute of Chicago' color = 'blue' location='111 S Michigan Ave'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean' color = 'pink' location='Millennium Park'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <Event event='Dinner with the Gals' color = 'pink' location='Lou Malnati'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='The Bean' color = 'green' location='Millennium Park'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Navy Pier' color = 'blue' location='The Pier'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Calendar;