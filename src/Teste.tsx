import { FunctionComponent, useCallback } from "react";
import styles from "./css/Teste.module.css";

export const Teste: FunctionComponent = () => {
  const onHeaderContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.testeDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
      </div>
      <div className={styles.headerDiv} onClick={onHeaderContainerClick}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="background@2x.png"
          data-scroll-to="backgroundImage"
        />
      </div>
      <div className={styles.registroDeDiv}>Registro de</div>
      <div className={styles.oPORTUNIDADESDiv}>OPORTUNIDADES</div>
      <div className={styles.nOVOREGISTRODiv}>NOVO REGISTRO</div>
      <div className={styles.iNFORMEABAIXOODDADOSDOSEU}>
        INFORME ABAIXO OD DADOS DO SEU PROJETO
      </div>
      <div className={styles.rectangleDiv1} />
      <div className={styles.cEPDiv}>CEP</div>
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <div className={styles.rectangleDiv4} />
      <div className={styles.rectangleDiv5} />
      <div className={styles.rectangleDiv6} />
      <div className={styles.rectangleDiv7} />
      <div className={styles.rectangleDiv8} />
      <div className={styles.rectangleDiv9} />
      <div className={styles.rectangleDiv10} />
      <div className={styles.rectangleDiv11} />
      <div className={styles.rectangleDiv12} />
      <div className={styles.rectangleDiv13} />
      <div className={styles.rectangleDiv14} />
      <div className={styles.nMERODiv}>NÚMERO</div>
      <div className={styles.bAIRRODiv}>BAIRRO</div>
      <div className={styles.uFDiv}>UF</div>
      <div className={styles.rUADiv}>RUA</div>
      <div className={styles.cOMPLEMENTODiv}>COMPLEMENTO</div>
      <div className={styles.mUNICPIODiv}>MUNICÍPIO</div>
      <img className={styles.polygonIcon} alt="" src="polygon-1.svg" />
      <div className={styles.pRODUTOSDiv}>PRODUTOS</div>
      <div className={styles.rectangleDiv15} />
      <img className={styles.polygonIcon1} alt="" src="polygon-2.svg" />
      <div className={styles.rectangleDiv16} />
      <div className={styles.rectangleDiv17} />
      <div className={styles.qTDDiv}>QTD</div>
      <div className={styles.rectangleDiv18} />
      <div className={styles.rectangleDiv19} />
      <div className={styles.vALORDiv}>VALOR</div>
      <div className={styles.rectangleDiv20} />
      <div className={styles.rectangleDiv21} />
      <div className={styles.tOTALDiv}>TOTAL</div>
      <div className={styles.div}>+</div>
      <div className={styles.div1}>-</div>
      <div className={styles.faleConoscoDiv}>
        <div className={styles.contactFormDiv}>
          <div className={styles.contactFormDiv}>
            <div className={styles.contactFormDiv}>
              <div className={styles.rectangleDiv22} />
              <div className={styles.aNEXODiv}>ANEXO</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleDiv23} />
      <div className={styles.rectangleDiv24} />
      <div className={styles.div2}>+</div>
      <div className={styles.div3}>-</div>
      <div className={styles.faleConoscoDiv1}>
        <div className={styles.contactFormDiv1}>
          <div className={styles.contactFormDiv1}>
            <div className={styles.contactFormDiv1}>
              <div className={styles.rectangleDiv25} />
              <div className={styles.submitDiv2}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
