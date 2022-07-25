// [
//   { "id": "id-1", "label": ".docx", "percentage": 22 },
//   { "id": "id-2", "label": ".pdf", "percentage": 4 },
//   { "id": "id-3", "label": ".mp3", "percentage": 17 },
//   { "id": "id-4", "label": ".psd", "percentage": 47 },
//   { "id": "id-5", "label": ".pdf", "percentage": 10 }
// ]
// import data from '../data.json';
import PropTypes from 'prop-types';
import {
  Container,
  StatList,
  StatListItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';
// import { css } from 'styled-components';
import { getRandomHexColor } from '../../utils/randomColor';

const StatsData = ({ title, stats }) => {
  return (
    <Container>
      {title && <h2 className="title">{title}</h2>}

      <StatList>
        {stats.map(stat => (
          <StatListItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}</StatPercentage>
          </StatListItem>
        ))}
      </StatList>
    </Container>
  );
};
StatsData.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default StatsData;
