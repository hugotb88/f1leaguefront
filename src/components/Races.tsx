import {useEffect, useState} from "react";
import { tracks } from "../data/tracks";
import '../css/Races.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const NAME = "Races"

function Races({
    onRouteChanged,
  }: {
    onRouteChanged: (routeName: string) => void;
  }
) {
    const [tracksData] = useState(tracks);

    const imagesPerRow = 3;

    const groupedTracks = [];

    useEffect(() => {
      onRouteChanged(NAME)
    }, [onRouteChanged]);

    for (let i = 0; i < tracksData.length; i += imagesPerRow) {
        groupedTracks.push(tracksData.slice(i, i + imagesPerRow));
    }

    return (
        <Container>
            {groupedTracks.map((rowTracks, rowIndex) => (
                <Row key={rowIndex}>
                    {rowTracks.map((track, trackIndex) => (
                        <Col key={trackIndex} sm={12} md={4} lg={4}>
                            <Card className="card-races">
                                <Card.Img
                                    src={track.image}
                                    style={{ maxWidth: '100%' }} // Use provided maxWidth or default to 100%
                                />
                                <Card.ImgOverlay>
                                    <Card.Title className="card-races-title">{track.name}</Card.Title>
                                </Card.ImgOverlay>
                                {track.winner ?
                                <Card.Footer className="card-races-footer">Winner: {track.winner}</Card.Footer> :
                                null}

                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    )
}

export default Races;