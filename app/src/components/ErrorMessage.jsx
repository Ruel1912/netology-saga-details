import PropTypes from 'prop-types';

export default function ErrorMessage({ retryAction, text }) {

  ErrorMessage.propTypes = {
    retryAction: PropTypes.func,
    text: PropTypes.string
  }

  return (
    <div className="p-4 bg-red-100 text-red-800 rounded-lg">
      <p> Произошла ошибка! {text}</p>
      <button onClick={retryAction} className="btn btn-neutral mt-2">
        Повторить запрос
      </button>
    </div>
  );
}
