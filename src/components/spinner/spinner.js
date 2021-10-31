import spinnerImg from './Spinner-1s-200px.gif'

const Spinner = () => {
    return (
        <div style={{ margin: '0 auto', background: 'none', display: 'block' }}>
            <img src={spinnerImg} alt="spinner" />
        </div>
    )
};

export default Spinner;