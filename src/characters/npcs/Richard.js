import Character from "../Character";

export default class Richard extends Character {
  constructor(scene) {
    super("Richard");

    const objects = scene.cache.json.get("objects");
<<<<<<< HEAD
    this.sprite = scene.matter.add.sprite(1100, 400, "guy", 0, {
=======
    scene.characters.richard = scene.matter.add.sprite(1100, 400, "guy", 0, {
>>>>>>> 4ba514d73e5749addaa06458ac46440ee0c8e2d5
      shape: objects.richard,
      isStatic: true
    });

<<<<<<< HEAD
    scene.characters.richard = this.sprite;

=======
>>>>>>> 4ba514d73e5749addaa06458ac46440ee0c8e2d5
    scene.characters.richard.body.inertia = Infinity;
    scene.characters.richard.setScale(
      scene.characters.richard.scale * 0.7,
      scene.characters.richard.scale * 0.7
    );
    scene.anims.create({
      key: "chill",
      frames: scene.anims.generateFrameNumbers("richard", {
        start: 0,
        end: 11
      }),
      frameRate: 4,
      repeat: -1
    });
    scene.characters.richard.anims.play("chill", true);
  }

  getDefaultDialogue(character) {
    return "God has forsaken us.";
    //return "Why hello there, " + character.getName();
  }
}
