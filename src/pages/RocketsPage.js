import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rocketsSlice';

function RocketsPage() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <main>
      <div className="rocket-list row">
        {rockets.map((rocket) => (
          <Rocket key={rocket.id} rocketData={rocket} />
        ))}
      </div>
    </main>
  );
}

export default RocketsPage;
