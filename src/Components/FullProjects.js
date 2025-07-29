import Squares from './Squares';
import CardSwap, { Card } from './CardSwap';

function FullProjects() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Squares animated background */}
      <Squares
        speed={1}
        squareSize={40}
        direction="diagonal"
        borderColor="#000000"
        hoverFillColor="#cccccc"
      />

      {/* Overlay: Centered CardSwap content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            height: '400px',
            width: '450px',
            position: 'relative',
            margin: '0 auto'
          }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                  fontFamily: "'Inter', sans-serif",
                  color: 'white',
                  height: '100%',
                  overflow: 'hidden',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  <h1
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      letterSpacing: '-0.5px'
                    }}
                  >
                    Inventra
                  </h1>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#b0b0b0'
                    }}
                  >
                    Inventory Tracking Application for McAsphalt
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    alignSelf: 'center',
                    width: '400px',
                    height: '300px',
                    overflow: 'hidden',
                    borderRadius: '12px'
                  }}
                >
                  <img
                    src="/images/Inventory.png"
                    alt="Victor"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </Card>

            <Card>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                  fontFamily: "'Inter', sans-serif",
                  color: 'white',
                  height: '100%',
                  overflow: 'hidden',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  <h1
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      letterSpacing: '-0.5px'
                    }}
                  >
                    DermaAI
                  </h1>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#b0b0b0'
                    }}
                  >
                    AI model using YOLOv8 & Roboflow to detect melanoma
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    alignSelf: 'center',
                    width: '400x',
                    height: '300px',
                    overflow: 'hidden',
                    borderRadius: '12px'
                  }}
                >
                  <img
                    src="/images/DermaAI.png"
                    alt="Victor"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </Card>

            <Card>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                  fontFamily: "'Inter', sans-serif",
                  color: 'white',
                  height: '100%',
                  overflow: 'hidden',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  <h1
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      letterSpacing: '-0.5px'
                    }}
                  >
                    Hollowspire
                  </h1>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#b0b0b0'
                    }}
                  >
                    2D action-packed game made in Unity and C#
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    alignSelf: 'center',
                    width: '400x',
                    height: '300px',
                    overflow: 'hidden',
                    borderRadius: '12px'
                  }}
                >
                  <img
                    src="/images/RPG.png"
                    alt="Victor"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </Card>

            <Card>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                  fontFamily: "'Inter', sans-serif",
                  color: 'white',
                  height: '100%',
                  overflow: 'hidden',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  <h1
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      letterSpacing: '-0.5px'
                    }}
                  >
                    JD Edwards MCA Self Service Portal
                  </h1>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#b0b0b0'
                    }}
                  >
                    Customized portal for McAsphalt Customers to access financial data from JD Edwards
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    alignSelf: 'center',
                    width: '500x',
                    height: '300px',
                    overflow: 'hidden',
                    borderRadius: '12px'
                  }}
                >
                  <img
                    src="/images/JDEPortal.png"
                    alt="Victor"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </Card>

            <Card>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem',
                  fontFamily: "'Inter', sans-serif",
                  color: 'white',
                  height: '100%',
                  overflow: 'hidden',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  <h1
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      letterSpacing: '-0.5px'
                    }}
                  >
                    Datastructure and Algorithm Sort Visualizer
                  </h1>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#b0b0b0'
                    }}
                  >
                    Created a visualizer for sorting datastructures and algorithms using Java and JavaFX
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    alignSelf: 'center',
                    width: '500x',
                    height: '300px',
                    overflow: 'hidden',
                    borderRadius: '12px'
                  }}
                >
                  <img
                    src="/images/AlgoSort.png"
                    alt="Victor"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </Card>
          </CardSwap>

          {/* 🔙 Back Button (bottom right) */}
<a
  href="/"
  style={{
    position: 'absolute',
    bottom: '-160px',
    right: '-600px',
    zIndex: 10,
    display: 'inline-block',
    width: '120px',
    height: 'auto'
  }}
>
  <img
    src="/images/Backbutton.png"
    alt="Back"
    style={{
      width: '100%',
      height: 'auto',
      cursor: 'pointer'
    }}
  />
</a>

        </div>
      </div>
    </div>
  );
}

export default FullProjects;
