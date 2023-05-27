import React from 'react';
import '../styles.css';
import { useSelector } from 'react-redux';

const getReserved = (rocket) => {
  if (rocket.reserved) {
    return (
      <tr key={rocket}>
        <td className="separator">{rocket.rocket_name}</td>
      </tr>
    );
  }

  return null;
  // return (

  // );
};

const getJoinedMission = (mission) => {
  if (mission.active) {
    return (
      <tr key={mission}>
        <td className="separator">{mission.mission_name}</td>
      </tr>
    );
  }

  return null;
};

function MyProfilePage() {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.mission);

  return (
    <div className="main-wrap">
      <div className="list-wrap">
        <h3>My Missions</h3>
        <table className="bordered rounded">
          {missions.map((mission) => getJoinedMission(mission))}
          {missions.length === 0 && (
            <tr>
              <td>
                <p style={{ marginLeft: '20px', marginBottom: '20px' }}>
                  No joined missions data to display
                </p>
              </td>
            </tr>
          )}
        </table>
      </div>
      <div className="list-wrapx">
        <h3>My Rockets</h3>
        <table className="bordered rounded">
          {rockets.map((rocket) => getReserved(rocket))}
          {rockets.length === 0 && (
            <tr>
              <td>
                <p style={{ marginLeft: '20px', marginBottom: '20px' }}>
                  No reserved rocket data to display
                </p>
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default MyProfilePage;
