import PropTypes from 'prop-types';

function FilterSelect(props) {
	function handleChange(e) {
		props.setSelectedFilter(e.target.value);
	}

	return (
		<label htmlFor="filterReminders">
			Show tasks due:
			<select id="filterReminders" value={props.selectedFilter}
				onChange={handleChange}>
				<option value="2day">Within 2 Days</option>
				<option value="1week">Within 1 Week</option>
				<option value="30days">Within 30 Days</option>
				<option value="all">Any time</option>
			</select>
		</label>
	);
}

FilterSelect.propTypes = {
	selectedFilter: PropTypes.string,
	setSelectedFilter: PropTypes.func
}

FilterSelect.defaultProps = {
	selectedFilter: 'all'
}

export default FilterSelect;