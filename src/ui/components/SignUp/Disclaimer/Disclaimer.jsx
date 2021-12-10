import { Modal, Button } from '@mui/material';
import { event } from '../../../../config/event';
import css from './Disclaimer.module.css';

export const Disclaimer = ({ open, onClose }) => (
  <Modal open={open} className={css.modal}>
    <div className={css.container}>
      <p>
        1. You shall use the NEAR tokens with the sole purpose of utility in connection with the
        NEAR protocol and for no other purpose without the prior written consent of the NEAR
        Foundation, which consent shall be in the sole discretion of the NEAR Foundation.
      </p>
      <p>
        2. You shall use the NEAR tokens in a manner that will, at all times, be in accordance with
        the laws of Switzerland, and which will not injure or detract the reputation or conflict
        with any other interest of the NEAR Foundation.
      </p>
      <p>
        3. You are prohibited from transferring the NEAR tokens to a third party by sale, exchange,
        lending or in any other manner except for the consumptive use as described above.
      </p>
      <p>
        WE RECOMMEND YOU CONSULT LEGAL, FINANCIAL, TAX AND OTHER PROFESSIONAL ADVISORS OR EXPERTS
        FOR FURTHER GUIDANCE BEFORE PARTICIPATING IN NEARDROP AT {event.mainUrl}. YOU ARE STRONGLY
        ADVISED TO TAKE INDEPENDENT LEGAL ADVICE IN RESPECT OF THE LEGALITY IN YOUR JURISDICTION OF
        ANY PARTICIPATION IN THE NEARDROP.
      </p>
      <Button className={css.button} onClick={onClose}>
        Got it
      </Button>
    </div>
  </Modal>
);
