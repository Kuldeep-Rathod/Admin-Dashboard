import { FaRegBell } from "react-icons/fa6";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const dashboard = () => {
    return (
        <div className="adminContainer">
            <AdminSidebar />
            <main className="dashboard">
                <div className="bar">
                    <BsSearch />
                    <input
                        type="text"
                        placeholder="Search for data, users, docs"
                    />
                    <FaRegBell />
                    <img src={userImg} alt="" />
                </div>

                <section className="widgetContainer">
                    <WidgetItem
                        percent={40}
                        amount={true}
                        value={340000}
                        heading="Revenue"
                        color="rgb(0,115,225)"
                    />
                    <WidgetItem
                        percent={-14}
                        amount={false}
                        value={400}
                        heading="Users"
                        color="rgb(0,198,202)"
                    />
                    <WidgetItem
                        percent={80}
                        amount={false}
                        value={23000}
                        heading="Transactions"
                        color="rgb(255,196,0)"
                    />
                    <WidgetItem
                        percent={30}
                        amount={false}
                        value={1000}
                        heading="Products"
                        color="rgb(76,0,255)"
                    />
                </section>

                <section className="graphContainer">
                    <div className="revenueChart">
                        <h2>Revenue & Transaction</h2>
                        {/* Graph here */}
                    </div>
                    <div className="dashboardCategories">
                        <h2>Inventory</h2>
                        x
                    </div>
                </section>
            </main>
        </div>
    );
};

interface WidgetItemProps {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
}

const WidgetItem = ({
    heading,
    value,
    percent,
    color,
    amount,
}: WidgetItemProps) => (
    <article className="widget">
        <div className="widgetInfo">
            <p>{heading}</p>
            <h4>{amount ? `$${value}` : value}</h4>
            {percent > 0 ? (
                <span className="green">
                    <HiTrendingUp /> + {percent}%{""}
                </span>
            ) : (
                <span className="red">
                    <HiTrendingDown /> {percent}%{""}
                </span>
            )}
        </div>
        <div
            className="widgetCircle"
            style={{
                background: `conic-gradient(
                  ${color} ${
                    (Math.abs(percent) / 100) * 360
                }deg, rgb(255,255,255) 0
                )`,
            }}
        >
            <span style={{ color }}>{percent}%</span>
        </div>
    </article>
);

export default dashboard;
