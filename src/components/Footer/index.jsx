import './style.css';
import { ConsolesLink } from '../ConsolesLink';
import { HMMLogo } from '../HMMLogo';
import { InstitutionalLinks } from '../InstitutionalLinks';
import { SocialShare } from '../SocialShare';
import { AgeLimit } from '../AgeLimit';
import { GameContentLimit } from '../GameContentLimit';

export const Footer = () => {
  return (
    <section className="footer">
      <HMMLogo height="100px" />
      <ConsolesLink />
      <SocialShare />
      <InstitutionalLinks />
      <AgeLimit />
      <GameContentLimit />
    </section>
  );
};
