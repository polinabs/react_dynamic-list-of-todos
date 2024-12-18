type Props = {
  selectOption: (option: string) => void;
  handleSearchChange: (text: string) => void;
  clearSearchButton: () => void;
  value: string;
  buttonStatus: boolean;
};

export const TodoFilter: React.FC<Props> = ({
  selectOption,
  handleSearchChange,
  clearSearchButton,
  value,
  buttonStatus,
}) => (
  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          onChange={event => selectOption(event.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={value}
        onChange={event => handleSearchChange(event.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      {buttonStatus && value.trim() !== '' && (
        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={clearSearchButton}
          />
        </span>
      )}
    </p>
  </form>
);
