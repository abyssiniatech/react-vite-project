

const Union = (): React.ReactElement => {
    function getTime(): React.ReactElement {
        const Hour = new Date().getHours();
        const Minutes = new Date().getMinutes();
        const Second = new Date().getSeconds();
        return <div>{Hour}:{Minutes}:{Second}</div>;
    }
    return getTime();
}


export default Union

