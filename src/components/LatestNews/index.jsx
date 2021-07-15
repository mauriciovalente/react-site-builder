import { useTranslationContext } from '../../contexts/TranslationContext';
import './styles.css';

export const LatestNews = () => {
  const [state] = useTranslationContext();
  const translations = state.translations;

  const news = [
    { id: 0, title: 'First news in from Hoplon HMM ...', image: 'image' },
    { id: 1, title: 'Second news in from Hoplon HMM ...', image: 'image' },
    { id: 2, title: 'Third news in from Hoplon HMM ...', image: 'image' },
  ];
  return (
    <div className="latest-news">
      <h1 className="lastest-title">{translations['latest news']}</h1>
      <div className="latest-news-cards">
        {news.map((n) => (
          <div key={n.id} className="news-card">
            <img src={n.image} alt={n.image} />
            <p>{n.title}</p>
          </div>
        ))}
      </div>
      <div>
        <button type="button" className="action-button">
          {translations['see more']}
        </button>
      </div>
    </div>
  );
};
