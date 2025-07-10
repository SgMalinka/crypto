import { Main } from '@/components/Main';
import styles from './page.module.scss';
import { getCryptoRates } from '@/core/utils/getCryptoRates';

export default async function Home() {
    const rates = await getCryptoRates();

    return (
        <div className={styles.page}>
            <Main rates={rates} />
        </div>
    );
}
