import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';
import '../styles/layout/Form.scss';

const Form = (props) => {
  return (
    <section className="form-section">
      <h3 className="form-section__title">
        Search for your fa(WOW)rite scene...{' '}
      </h3>
      <form className="form">
        <FilterByMovie
          handleMovieFilter={props.handleMovieFilter}
          movieFilterData={props.movieFilterData}
        />
        <FilterByYear
          handleYearFilter={props.handleYearFilter}
          years={props.years}
        />
      </form>
    </section>
  );
};

export default Form;
