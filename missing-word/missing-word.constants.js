const GREY_CARDS = [
    "_finger",
    "_cow",
    "wet_",
    "_service",
    "world_",
    "_neck",
    "traffic_",
    "_bowl",
    "_mouth",
    "_guy",
    "_glass",
    "_boat",
    "_luck",
    "_shot",
    "up_",
    "sky_",
    "_town",
    "window_",
    "_keeper",
    "_guard",
    "silent_",
    "_court",
    "_language",
    "_storm",
    "_potato",
    "_powder",
    "south_",
    "_water",
    "_chip",
    "_dollar",
    "_gear",
    "social_",
    "time_",
    "tooth_",
    "_wash",
    "_child",
    "spoiled_",
    "_meat",
    "truck_",
    "tax_",
    "wild_",
    "_break",
    "_floor",
    "sun_",
    "sure_",
    "_dance",
    "_wine",
    "_less",
    "tail_",
    "_age",
    "_pot",
    "sweet_",
    "_father",
    "stock_",
    "super_",
    "_name",
    "_weight",
    "_mate",
    "top_",
    "_ever",
    "white_",
    "_fry",
    "_oil",
    "sub_",
    "spit_",
    "_pit",
    "_bug",
    "strip_",
    "_duck",
    "smooth_",
    "_well",
    "sweat_",
    "side_",
    "team_",
    "sound_",
    "straight_",
    "snow_",
    "_drum",
    "ball_",
    "_brush",
    "water_",
    "_load",
    "string_",
    "_room",
    "spare_",
    "_frame",
    "_ticket",
    "_party",
    "_feet",
    "_bar",
    "_paper",
    "_cup",
    "_fly",
    "_blue",
    "_suit",
    "_glove",
    "_bee",
    "_chocolate",
    "_class",
    "_bite",
    "_duty",
    "tennis_",
    "show_",
    "third_",
    "small_",
    "tight_",
    "speed_",
    "_body",
    "_bean",
    "snake_",
    "_green",
    "thank_",
    "_pole",
    "_aid",
    "_dog",
    "_corn",
    "_story",
    "_pad",
    "_mark",
    "_tank",
    "_belly",
    "_limit",
    "_berry",
    "_bread",
    "_cake",
    "_bag",
    "_case",
    "_club",
    "vegetable_",
    "_bird",
    "_paint",
    "_bone",
    "_life",
    "_friend",
    "soul_",
    "so_",
    "_done",
    "tea_",
    "test_",
    "_jam",
    "train_",
    "toilet_",
    "_bed",
    "_hard",
    "_key",
    "_word",
    "_band",
    "_fight",
    "spring_",
    "_work",
    "tough_",
    "_cut",
    "_good",
    "_sauce",
    "_fish",
    "_coat",
    "_driver",
    "_horse",
    "_guess",
    "_beer",
    "_time",
    "_market",
    "_fair",
    "_hour",
    "welcome_",
    "_spot",
    "star_",
    "_pick",
    "_field",
    "_stool",
    "_skate",
    "_upper",
    "_rest",
    "_chance",
    "_board",
    "slow_",
    "_date",
    "what's_",
    "_job",
    "_door",
    "_drive",
    "_clock",
    "_ball",
    "_pen",
    "_shrine",
    "_cream",
    "_bear",
    "spot_",
    "_tag",
    "_juice",
    "_power",
    "_ache",
    "_hole",
    "_control",
    "_table",
    "_office",
    "_flow",
    "_down",
    "_flakes",
    "stiff_",
    "_face",
    "_stop",
    "_star",
    "summer_",
    "_free",
    "_blanket",
    "_salad",
    "_gun",
    "silver_",
    "sour_",
    "sitting_",
    "too_",
    "_ring",
    "_bell",
    "_front",
    "_egg",
    "_seat",
    "wine_",
    "_basket",
    "_station",
    "_night",
    "_shop",
    "_hand",
    "_fire",
    "_walk",
    "_food",
    "_cycle",
    "_drop",
    "training_",
    "_order",
    "_bench",
    "wide_",
    "_land",
    "tropical_",
    "under_",
    "tree_",
    "_grown",
    "_doll",
    "_course",
];

const WHITE_CARDS = [
    "fried_",
    "same_",
    "birthday_",
    "fire_",
    "down_",
    "penny_",
    "paper_",
    "key_",
    "round_",
    "blue_",
    "fast_",
    "cheese_",
    "busy_",
    "fish_",
    "rain_",
    "rice_",
    "moon_",
    "eye_",
    "deep_",
    "play_",
    "motor_",
    "cash_",
    "house_",
    "oil_",
    "human_",
    "dinner_",
    "heart_",
    "coffee_",
    "elbow_",
    "pepper_",
    "bath_",
    "meat_",
    "foot_",
    "love_",
    "red_",
    "dirt_",
    "single_",
    "pocket_",
    "growing_",
    "mother_",
    "life_",
    "bottom_",
    "prime_",
    "court_",
    "out_",
    "mini_",
    "big_",
    "mud_",
    "bowling_",
    "back_",
    "bean_",
    "over_",
    "leading_",
    "deadly_",
    "book_",
    "second_",
    "salt_",
    "pretty_",
    "honey_",
    "pin_",
    "name_",
    "master_",
    "grape_",
    "dead_",
    "face_",
    "grand_",
    "horse_",
    "dog_",
    "gas_",
    "magic_",
    "off_",
    "barn_",
    "bubble_",
    "bull_",
    "front_",
    "lip_",
    "black_",
    "mountain_",
    "business_",
    "open_",
    "rubber_",
    "base_",
    "golf_",
    "finger_",
    "air_",
    "parking_",
    "bus_",
    "hang_",
    "baby_",
    "chocolate_",
    "center_",
    "lucky_",
    "good_",
    "flat_",
    "mass_",
    "bed_",
    "salad_",
    "belly_",
    "body_",
    "box_",
    "baked_",
    "brass_",
    "health_",
    "country_",
    "mouth_",
    "hold_",
    "shoe_",
    "shopping_",
    "evening_",
    "full_",
    "cat_",
    "great_",
    "french_",
    "picnic_",
    "odd_",
    "best_",
    "flash_",
    "jet_",
    "search_",
    "nose_",
    "micro_",
    "egg_",
    "fine_",
    "pea_",
    "neck_",
    "cheap_",
    "roller_",
    "lime_",
    "happy_",
    "head_",
    "pillow_",
    "milk_",
    "broken_",
    "chop_",
    "night_",
    "party_",
    "running_",
    "car_",
    "middle_",
    "half_",
    "pine_",
    "free_",
    "christmas_",
    "birth_",
    "shot_",
    "green_",
    "long_",
    "raw_",
    "rest_",
    "jail_",
    "monkey_",
    "safety_",
    "root_",
    "ever_",
    "hard_",
    "right_",
    "day_",
    "pot_",
    "real_",
    "fresh_",
    "mixed_",
    "for_",
    "sand_",
    "crab_",
    "drive_",
    "nice_",
    "go_",
    "punch_",
    "beach_",
    "school_",
    "junk_",
    "club_",
    "holy_",
    "hand_",
    "gift_",
    "oh_",
    "jump_",
    "security_",
    "fat_",
    "keep_",
    "lap_",
    "high_",
    "wedding_",
    "ground_",
    "jack_",
    "check_",
    "bare_",
    "pit_",
    "man_",
    "field_",
    "semi_",
    "apple_",
    "easter_",
    "candy_",
    "make_",
    "get_",
    "lunch_",
    "kick_",
    "dirty_",
    "pop_",
    "cream_",
    "light_",
    "land_",
    "better_",
    "double_",
    "fruit_",
    "hot_",
    "draw_",
    "no_",
    "perfect_",
    "north_",
    "candle_",
    "home_",
    "flower_",
    "never_",
    "cow_",
    "ice_",
    "even_",
    "banana_",
    "left_",
    "game_",
    "jelly_",
    "pig_",
    "moving_",
    "mid_",
    "door_",
    "hyper_",
    "cold_",
    "screw_",
    "golden_",
    "food_",
    "short_",
    "rock_",
    "chicken_",
    "sea_",
    "cherry_",
    "pay_",
    "just_",
    "chain_",
];

const MISSING_WORD_CARDS = [
    "_house",
    "evening_",
    "pay_",
    "north_",
    "door_",
    "sour_",
    "pig_",
    "_walk",
    "_cycle",
    "food_",
    "_drop",
    "training_",
    "cow_",
    "_ticket",
    "business_",
    "golden_",
    "silver_",
    "draw_",
    "_bell",
    "_control",
    "magic_",
    "barn_",
    "better_",
    "fine_",
    "front_",
    "oh_",
    "sand_",
    "cold_",
    "_pad",
    "super_",
    "_mouse",
    "party_",
    "_party",
].concat(WHITE_CARDS, GREY_CARDS);

module.exports = {
    MISSING_WORD_CARDS
}
