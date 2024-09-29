import { Link, Element } from 'react-scroll';
import ImageWithCaption from "../components/ImageWithCaption.tsx";
import Question from "../components/Question.tsx";
// 使用内联样式
const styles = {
    container: {
        backgroundColor: '#FFF8F0',
        display: 'flex',

        //height从100vh改成auto即可实现点击滚动，原因就在于100vh是固定高度，不会随着内容的增加而增加，用视窗高度限制住了内容

        height: 'auto',
    },
    sidebar: {
        //使用position: sticky;实现侧边栏滚动到顶端固定，必须设置top/bottom等四边属性之一，属性值就是滚动的极限距离，而且父组件不可以设置未overflow:hidden/auto
        top: '70px',
        height: '400px',
        marginRight: '10px',
        marginLeft: '10px',
        width: '350px',
        backgroundColor: '#F0D6B4',
        borderRadius: '20px',
        padding: '20px',
        borderRight: '1px solid #ddd',
        position: 'sticky' as 'sticky',// 强制类型断言
    },
    sidebarItem: {
        marginBottom: '15px',
        fontSize: '22px', 
        color: '#c67e38', 
        fontWeight: 'bold',
    },
    content: {
        marginLeft: '30px',
        width: '100%',
        backgroundColor: '#fff8f0',
        border: '20px solid #BC8C5B', // 修改这里
        borderRadius: '20px',
        flex: 1,
        padding: '20px',
        overflowY: 'auto' as 'auto',// 强制类型断言

        //用负值的outline代替内圆角，而且radius是一样的

        outline: '5px solid #ffffff',
        outlineOffset: '-20px',
        // boxShadow: '0 0 0 30px #FFF8F0', // 模拟内侧圆角
    },

    section: {
        padding: '50px 0',
        borderBottom: '1px solid #ddd',
    },
    heading: {
        marginBottom: '15px',
        fontSize: '36px', 
        color: '#c67e38', 
        fontWeight: 'bold',
        textAlign: 'center' as const,
    },
    partheading: {
        marginBottom: '10px',
        fontSize: '30px',
        color: '#c67e38', 
        fontWeight: 'bold',
        textAlign: 'center' as const,
    },
    paragraph: {
        lineHeight: 1.4,
        fontSize: '24px',
        textAlign: 'justify' as const,
    },
    
};
const question = '地球围绕太阳旋转的方向是什么？';
const options = ['A. 顺时针方向', 'B. 逆时针方向', 'C. 没有固定方向', 'D. 有时顺时针有时逆时针'];
const correctAnswer = 'B';
export function HumanPractices(): JSX.Element {

    return (
        <main style={{ backgroundColor: '#FFF8F0', minHeight: '100vh' }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <img
                    src="https://static.igem.wiki/teams/5376/viruse1.png"
                    alt="Left Image"
                    style={{maxWidth: '200px', height: 'auto'}}
                />

                <img
                    src="https://static.igem.wiki/teams/5376/humanpractices/humanpracticeslogo.png"
                    alt="TITLE"
                    style={{width: '1062px', height: '150px', objectFit: 'cover'}}
                />


                <img
                    src="https://static.igem.wiki/teams/5376/viruse2.png"
                    alt="Right Image"
                    style={{maxWidth: '200px', height: 'auto'}}
                />
            </div>
            <div style={styles.container}>
            <aside style={styles.sidebar}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {['Overview', 'Adhension Module', 'Therapeutic Modules', 'Quorum Sensing Module', 'Community Characterization Methods', 'Project Design Iteration', 'Reference'].map((item, index) => (
                        <li key={index} style={styles.sidebarItem}>
                            <div style={{ textDecoration: 'none', color: '#c67e38', cursor: 'pointer' }}>
                                <Link
                                    to={`section${index + 1}`}
                                    smooth={true}
                                    duration={50}
                                    offset={-20}
                                    spy={true}
                                    activeClass="active"
                                    onMouseOver={(e) => e.currentTarget.style.color = '#955321'}
                                    onMouseOut={(e) => e.currentTarget.style.color = '#c67e38'}
                                >
                                    {item}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </aside>
            <main style={styles.content}>
                <Element name="section1" style={styles.section}>
                <h1>单选题测试</h1>
                <Question
                    question={question}
                    options={options}
                    correctAnswer={correctAnswer}
                />
                </Element>
            </main>
        </div>
        </main>
        
    )
        ;
}




