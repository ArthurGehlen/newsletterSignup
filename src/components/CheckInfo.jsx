import icon_list from '../assets/images/icon-list.svg'

function CheckInfo({ text }) {
  return (
    <div id="checker_container" style={styles.checker_container}>
      <img src={icon_list} alt="Icon list" />
      <span>{text}</span>
    </div>
  );
}

const styles = {
  checker_container: {
    display: 'flex',
    gap: '1rem',
  },
};

export default CheckInfo;
