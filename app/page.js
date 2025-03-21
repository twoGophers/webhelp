import ECharts from "@/components/Main/ECharts";
import RainbowSpeedometer from "@/components/Main/RainbowSpeedometer";
import Statistic from "@/components/Main/Statistic";
import Table from "@/components/Main/Table";
import TitleMain from "@/components/Main/TitleMain";
import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <main>
        <TitleMain title={'Welcome back, John'} text={'Measure your advertising ROI and report website traffic.'} />
        <Statistic />
        <ECharts />
        <div style={{ margin: '40px 25px' }}>
          <TitleMain  title={'Reports overview'} text={''} />
        </div>
        <div className="over-block">
          <RainbowSpeedometer />
          <Table />
        </div>
      </main>
    </div>
  );
}
